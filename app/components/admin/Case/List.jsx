import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";

import DeleteServiceCase from "./Delete";
import AdminModal from "../Modal";
import ServiceCaseForm from "./Form";

export default function ListCases({ items = [], branches = [], clients = [] }) {
  const [addServiceCase, setAddServiceCase] = useState(false);
  const [showServiceCase, setShowServiceCase] = useState({
    serviceCase: {},
    active: false,
  });
  const [deleteServiceCase, setDeleteServiceCase] = useState({
    serviceCase: {},
    active: false,
  });

  return (
    <>
      {items?.length > 0 && (
        <table className="table-auto w-full text-lg">
          <thead>
            <tr>
              <th className="text-start">Описание</th>
              <th className="text-start">Задача</th>
              <th className="text-start">Результаты</th>
              <th className="text-start">Клиент</th>
              <th className="text-start">Услуги</th>
              <th className="text-start">Цифры в услуге</th>
            </tr>
          </thead>
          <tbody>
            {items.map((serviceCase) => (
              <tr key={serviceCase.id} className="border-y">
                <td>{serviceCase.description}</td>
                <td>{serviceCase.task}</td>
                <td>{serviceCase.results}</td>
                <td>
                  <ul className="list-disc ps-20">
                    {serviceCase.client?.title}
                  </ul>
                </td>
                <td>
                  <ul className="list-disc ps-20">
                    {serviceCase.services?.map((service) => (
                      <li key={service.id}>{service.title}</li>
                    ))}
                  </ul>
                </td>
                <td>
                  <ul className="list-disc ps-20">
                    {serviceCase.numbers?.map((number) => (
                      <li key={number.id}>
                        <p className="font-bold">{number.title}</p>
                        <p>{number.body}</p>
                      </li>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowServiceCase({
                            serviceCase: serviceCase,
                            active: true,
                          });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteServiceCase({
                            serviceCase: serviceCase,
                            active: true,
                          });
                        }}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {items.length === 0 && (
        <div className="text-2xl font-bold">Не найдено ни одного кейса</div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddServiceCase(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addServiceCase && (
        <AdminModal
          title="Новый кейс"
          closeModal={() => {
            setAddServiceCase(false);
          }}
        >
          <ServiceCaseForm
            branches={branches}
            clients={clients}
            intent="add"
            closeHandler={() => {
              setAddServiceCase(false);
            }}
          />
        </AdminModal>
      )}
      {showServiceCase.active && (
        <AdminModal
          title="Изменить кейс"
          closeModal={() => {
            setShowServiceCase({ serviceCase: {}, active: false });
          }}
        >
          <ServiceCaseForm
            serviceCase={showServiceCase.serviceCase}
            numbersInCase={showServiceCase.serviceCase.numbers}
            branches={branches}
            clients={clients}
            intent="update"
            closeHandler={() => {
              setShowServiceCase({ serviceCase: {}, active: false });
            }}
          />
        </AdminModal>
      )}
      {deleteServiceCase.active && (
        <DeleteServiceCase
          serviceCase={deleteServiceCase.serviceCase}
          closeHandler={() => {
            setDeleteServiceCase({ serviceCase: {}, active: false });
          }}
        />
      )}
    </>
  );
}
