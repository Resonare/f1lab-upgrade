import { useFetcher } from "@remix-run/react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import TaskDone from "./TaskDone";
import AchievedIndicator from "./AchievedIndicator";
import Tag from "../../misc/Tag";

const ServiceCaseForm = ({
  closeHandler,
  intent = "update",
  serviceCase = {},
  branches = [],
  clients = [],
  tags = [],
  numbersInCase = [],
  doneInCase = [],
}) => {
  const fetcher = useFetcher();

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

  const [selectedTechTags, setSelectedTechTags] = useState(
    new Set(serviceCase.technologyTags?.map((tag) => tag.id) || [])
  );

  const handleSelectTechTag = (tagId) => {
    setSelectedTechTags((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(tagId)) {
        newSet.delete(tagId);
      } else {
        newSet.add(tagId);
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

    // Add all selected tech tags
    selectedTechTags.forEach((tagId) => {
      formData.append("techTagIds", tagId);
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
  }, [fetcher.state, fetcher.data, closeHandler]);

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
        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
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
        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
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
        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
          <p className="font-expanded font-extrabold text-2xl">О кейсе</p>
          <div className="mb-10">
            <label htmlFor="description">Описание</label>
            <textarea
              type="text"
              rows={5}
              id="description"
              name="description"
              className="border border-gray-200 px-10 text-md font-text w-full"
              defaultValue={serviceCase.description}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="task">Задача</label>
            <textarea
              type="text"
              rows={5}
              id="task"
              name="task"
              className="border border-gray-200 px-10 text-md font-text w-full"
              defaultValue={serviceCase.task}
            />
          </div>
          <div className="mb-10">
            <label htmlFor="results">Результаты</label>
            <textarea
              type="text"
              rows={5}
              id="results"
              name="results"
              className="border border-gray-200 px-10 text-md font-text w-full"
              defaultValue={serviceCase.results}
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
          <p className="font-expanded font-extrabold text-2xl">
            Тэги технологий
          </p>
          <p>Нажмите на тэг, чтобы выбрать</p>

          <div className="flex">
            {tags.map((tagData) => (
              <div
                key={tagData.id}
                className={
                  selectedTechTags.has(tagData.id)
                    ? `border-[5px] border-gray-400`
                    : `p-5`
                }
              >
                <Tag
                  className={`bg-${tagData.color} w-fit select-none`}
                  onClick={() => handleSelectTechTag(tagData.id)}
                >
                  {tagData.title}
                </Tag>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
          <p className="font-expanded font-extrabold text-2xl">
            Достигнутые показатели
          </p>

          {Array.from({ length: numbersInCaseCount }).map((_, index) => (
            <AchievedIndicator
              key={index}
              index={index}
              numbersInCase={numbersInCase}
            />
          ))}
          <button
            className="border border-dashed border-gray-200 cursor-pointer w-fit py-10 px-10"
            onClick={handleAddNewNumberInCase}
          >
            + Добавить
          </button>
        </div>
        <div className="flex flex-col gap-10 border border-dashed p-15 my-10">
          <p className="font-expanded font-extrabold text-2xl">
            Что было сделано
          </p>

          {Array.from({ length: doneInCaseCount }).map((_, index) => (
            <TaskDone key={index} index={index} doneInCase={doneInCase} />
          ))}
          <button
            className="border border-dashed border-gray-200 cursor-pointer w-fit py-5 px-10"
            onClick={handleAddNewDoneInCase}
          >
            + Добавить
          </button>
        </div>
        <input hidden type="text" name="intent" defaultValue={intent} />
        <input hidden type="text" name="id" defaultValue={serviceCase?.id} />
        <button
          type="submit"
          className="bg-gray-400 text-gray-100 text-2xl p-10 font-text w-[300px]"
        >
          Сохранить как черновик
        </button>
      </fetcher.Form>
    </>
  );
};

ServiceCaseForm.propTypes = {
  closeHandler: PropTypes.func,
  intent: PropTypes.string,
  serviceCase: PropTypes.object,
  branches: PropTypes.array,
  clients: PropTypes.array,
  numbersInCase: PropTypes.array,
  doneInCase: PropTypes.array,
};

export default ServiceCaseForm;
