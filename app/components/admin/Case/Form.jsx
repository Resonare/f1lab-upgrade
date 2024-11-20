import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";

const ServiceCaseForm = ({
  closeHandler,
  intent = "update",
  serviceCase = {},
  branches = [],
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
    formData.delete("serviceIds");

    // Add all selected services
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
        <input
          type="text"
          name="title"
          placeholder="Заголовок"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          defaultValue={serviceCase.title}
        />
        <textarea
          type="text"
          rows={5}
          name="description"
          placeholder="Краткое описание"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          defaultValue={serviceCase.description}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Имя файла-лого"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          defaultValue={
            serviceCase.imageUrl.split("/")[
              serviceCase.imageUrl.split("/").length - 1
            ]
          }
        />
        <div className="flex flex-col gap-10">
          {branches.map((branch) => (
            <div key={branch.id}>
              <div className="font-subtitle text-xl">{branch.title}</div>
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
