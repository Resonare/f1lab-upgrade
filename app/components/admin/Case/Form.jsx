import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

const ServiceCaseForm = ({
  closeHandler,
  intent = "update",
  serviceCase = {},
  branches = [],
  clients = [],
}) => {
  const fetcher = useFetcher();

  const formOptions = {
    buttonTitle:
      intent === "add"
        ? "Добавить"
        : intent === "update"
        ? "Изменить"
        : "Сохранить",
  };

  const [selectedClient, setSelectedClient] = useState(serviceCase.clientId);

  const handleClientChange = (clientId) => {
    setSelectedClient(clientId);
  };

  const [selectedServices, setSelectedServices] = useState(
    new Set(serviceCase.services?.map((service) => service.id) || [])
  );

  const handleCheckboxChange = (serviceId) => {
    setSelectedServices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(serviceId)) {
        newSet.delete(serviceId);
      } else {
        newSet.add(serviceId);
      }
      return newSet;
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    // Remove any existing serviceIds
    formData.delete("clientId");
    formData.delete("serviceIds");

    // Add all selected services
    formData.append("clientId", selectedClient);
    selectedServices.forEach((serviceId) => {
      formData.append("serviceIds", serviceId);
    });

    fetcher.submit(formData, {
      method: "POST",
    });
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && !fetcher.data.errors) {
      closeHandler();
    }
  }, [fetcher.state, fetcher.data]);

  const isServiceSelected = (serviceId) => {
    return serviceCase.services?.some((service) => service.id === serviceId);
  };

  return (
    <>
      <fetcher.Form
        method="POST"
        className="flex flex-col gap-10 py-30"
        onSubmit={submitHandler}
      >
        <textarea
          type="text"
          rows={5}
          name="description"
          placeholder="Описание"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          defaultValue={serviceCase.description}
        />
        <textarea
          type="text"
          rows={5}
          name="task"
          placeholder="Задача"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          defaultValue={serviceCase.task}
        />
        <textarea
          type="text"
          rows={5}
          name="results"
          placeholder="Что сделали"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          defaultValue={serviceCase.results}
        />
        {/* <input
          type="text"
          name="imageUrl"
          placeholder="Имя файла-лого"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          defaultValue={
            serviceCase.imageUrl.split("/")[
              serviceCase.imageUrl.split("/").length - 1
            ]
          }
        /> */}

        <div className="flex flex-col gap-10">
          <p className="font-expanded font-extrabold text-2xl">Клиент</p>
          {/* {console.log(clients)} */}
          {clients.map((client) => (
            <div key={client.id} className="flex gap-5">
              <input
                type="radio"
                name="client"
                id={client.title}
                value={client.id}
                onChange={() => handleClientChange(client.id)}
                checked={selectedClient == client.id}
              />
              <label htmlFor={client.title} className="font-subtitle text-lg">
                {client.title}
              </label>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-10">
          <p className="font-expanded font-extrabold text-2xl">Услуги</p>
          {branches.map((branch) => (
            <div key={branch.id}>
              <div className="font-subtitle text-lg">{branch.title}</div>
              {branch.services?.map((service) => (
                <div key={service.id} className="flex gap-10">
                  <input
                    type="checkbox"
                    name="serviceIds"
                    id={service.id}
                    value={service.id}
                    checked={selectedServices.has(service.id)}
                    onChange={() => handleCheckboxChange(service.id)}
                  />
                  <label htmlFor={service.id}>{service.title}</label>
                </div>
              ))}
            </div>
          ))}
        </div>

        <input hidden type="text" name="intent" defaultValue={intent} />
        <input hidden type="text" name="id" defaultValue={serviceCase?.id} />
        <button
          type="submit"
          className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text w-200"
        >
          {formOptions.buttonTitle}
        </button>
      </fetcher.Form>
    </>
  );
};

export default ServiceCaseForm;
