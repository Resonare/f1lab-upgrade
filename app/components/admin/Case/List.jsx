import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";

import DeleteServiceCase from "./Delete";
import PublishServiceCase from "./Publish";
import AdminModal from "../Modal";
import ServiceCaseForm from "./Form";

import PropTypes from "prop-types";

export default function ListCases({
  items = [],
  branches = [],
  clients = [],
  tags = [],
}) {
  const [addServiceCase, setAddServiceCase] = useState(false);
  const [showServiceCase, setShowServiceCase] = useState({
    serviceCase: {},
    active: false,
  });
  const [deleteServiceCase, setDeleteServiceCase] = useState({
    serviceCase: {},
    active: false,
  });
  const [publishServiceCase, setPublishServiceCase] = useState({
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
              <th className="text-start">Клиент</th>
              <th className="text-start">Статус</th>
            </tr>
          </thead>
          <tbody>
            {items.map((serviceCase) => (
              <tr key={serviceCase.id} className="border-y">
                <td className="w-1/2">{serviceCase.description}</td>
                <td>{serviceCase.client?.title}</td>
                <td>{serviceCase.published ? "Опубликован" : "Черновик"}</td>
                <td>
                  <div className="flex gap-20">
                    <div className="hover:text-f1-light">
                      <button
                        onClick={() => {
                          setPublishServiceCase({
                            serviceCase: serviceCase,
                            active: true,
                          });
                        }}
                      >
                        Опубликовать
                      </button>
                    </div>
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
            tags={tags}
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
            doneInCase={showServiceCase.serviceCase.dones}
            branches={branches}
            clients={clients}
            tags={tags}
            intent="update"
            closeHandler={() => {
              setShowServiceCase({ serviceCase: {}, active: false });
            }}
          />
        </AdminModal>
      )}
      {publishServiceCase.active && (
        <PublishServiceCase
          serviceCase={publishServiceCase.serviceCase}
          closeHandler={() => {
            setPublishServiceCase({ serviceCase: {}, active: false });
          }}
        />
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

ListCases.propTypes = {
  items: PropTypes.array,
  branches: PropTypes.array,
  clients: PropTypes.array,
};
