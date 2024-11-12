import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import AddServiceCase from "./Add";
import UpdateServiceCase from "./Update";
import DeleteServiceCase from "./Delete";

export default function ListCases({ items = [], branches = [] }) {
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
              <th className="text-start">Наименование</th>
              <th className="text-start">Краткое описание</th>
              <th className="text-start">Услуги</th>
            </tr>
          </thead>
          <tbody>
            {items.map((serviceCase) => (
              <tr key={serviceCase.id} className="border-y">
                <td>{serviceCase.title}</td>
                <td>{serviceCase.description}</td>
                <td>
                  <ul className="list-disc ps-20">
                    {serviceCase.services?.map((service) => (
                      <li key={service.id}>{service.title}</li>
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
        <AddServiceCase
          branches={branches}
          closeHandler={() => {
            setAddServiceCase(false);
          }}
        />
      )}
      {showServiceCase.active && (
        <UpdateServiceCase
          serviceCase={showServiceCase.serviceCase}
          closeHandler={() => {
            setShowServiceCase({ serviceCase: {}, active: false });
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
