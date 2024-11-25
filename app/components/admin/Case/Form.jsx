import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

const ServiceCaseForm = ({
  closeHandler,
  intent = "update",
  serviceCase = {},
  branches = [],
  clients = [],
  numbersInCase = [],
  doneInCase = [],
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

  const [numbersInCaseCount, setNumbersInCaseCount] = useState(
    numbersInCase.length + 1
  );

  const handleAddNewNumberInCase = (event) => {
    event.preventDefault();
    setNumbersInCaseCount(
      (prevNumbersInCaseCount) => prevNumbersInCaseCount + 1
    );
  };

  const [doneInCaseCount, setDoneInCaseCount] = useState(doneInCase.length + 1);

  const handleAddNewDoneInCase = (event) => {
    event.preventDefault();
    setDoneInCaseCount((prevDoneInCaseCount) => prevDoneInCaseCount + 1);
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

    formData.append("clientId", selectedClient);

    // Add all selected services
    selectedServices.forEach((serviceId) => {
      formData.append("serviceIds", serviceId);
    });

    for (let i = 0; i < numbersInCaseCount; i++) {
      let id = formData.get(`numberInCaseId${i}`);
      let title = formData.get(`numberInCaseTitle${i}`);
      let body = formData.get(`numberInCaseBody${i}`);

      if (!title && !body && !id) continue;

      formData.append("numberInCaseIds", id);
      formData.append("numberInCaseTitles", title);
      formData.append("numberInCaseBodies", body);
    }

    for (let i = 0; i < doneInCaseCount; i++) {
      let id = formData.get(`doneInCaseId${i}`);
      let title = formData.get(`doneInCaseTitle${i}`);
      let description = formData.get(`doneInCaseDescription${i}`);
      let iconPath = formData.get(`doneInCaseIconPath${i}`);
      let mobileIconPath = formData.get(`doneInCaseMobileIconPath${i}`);

      if (!title && !description && !id) continue;

      formData.append("doneInCaseIds", id);
      formData.append("doneInCaseTitles", title);
      formData.append("doneInCaseDescriptions", description);
      formData.append("doneInCaseIconPaths", iconPath);
      formData.append("doneInCaseMobileIconPaths", mobileIconPath);
    }

    fetcher.submit(formData, {
      method: "POST",
    });
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && !fetcher.data.errors) {
      closeHandler();
    }
  }, [fetcher.state, fetcher.data]);

  /* const isServiceSelected = (serviceId) => {
    return serviceCase.services?.some((service) => service.id === serviceId);
    }; */

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
        <div className="flex flex-col gap-10">
          <p className="font-expanded font-extrabold text-2xl">Цифры</p>
          <button
            className="border border-dashed border-gray-200 cursor-pointer w-fit py-5 px-10"
            onClick={handleAddNewNumberInCase}
          >
            <p className="select-none">+ Добавить</p>
          </button>

          {Array.from({ length: numbersInCaseCount }).map((_, index) => (
            <div key={index}>
              <p className="font-expanded font-extrabold text-lg">
                Столбец {index + 1}
              </p>
              <input
                defaultValue={numbersInCase[index]?.id}
                type="hidden"
                name={`numberInCaseId${index}`}
              />
              <input
                defaultValue={numbersInCase[index]?.title}
                type="text"
                name={`numberInCaseTitle${index}`}
                placeholder="Заголовок"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
              <textarea
                defaultValue={numbersInCase[index]?.body}
                type="text"
                rows={5}
                name={`numberInCaseBody${index}`}
                placeholder="Текст"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-expanded font-extrabold text-2xl">
            Что было сделано
          </p>
          <button
            className="border border-dashed border-gray-200 cursor-pointer w-fit py-5 px-10"
            onClick={handleAddNewDoneInCase}
          >
            <p className="select-none">+ Добавить</p>
          </button>
          {Array.from({ length: doneInCaseCount }).map((_, index) => (
            <div key={index}>
              <input
                defaultValue={doneInCase[index]?.id}
                type="hidden"
                name={`doneInCaseId${index}`}
              />
              <input
                defaultValue={doneInCase[index]?.title}
                type="text"
                name={`doneInCaseTitle${index}`}
                placeholder="Заголовок"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
              <textarea
                defaultValue={doneInCase[index]?.description}
                type="text"
                rows={5}
                name={`doneInCaseDescription${index}`}
                placeholder="Описание"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
              <input
                defaultValue={doneInCase[index]?.iconPath}
                type="text"
                name={`doneInCaseIconPath${index}`}
                placeholder="Путь до иконки"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
              <input
                defaultValue={doneInCase[index]?.mobileIconPath}
                type="text"
                name={`doneInCaseMobileIconPath${index}`}
                placeholder="Путь до иконки для мобильных устройств"
                className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-10">
          <p className="font-expanded font-extrabold text-2xl">Клиент</p>
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
