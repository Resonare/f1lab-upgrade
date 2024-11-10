import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import AddService from "./Add";
import UpdateService from "./Update";
import DeleteService from "./Delete";

export default function ListServices({ services = [], branches = [] }) {
  const [addService, setAddService] = useState(false);
  const [showService, setShowService] = useState({
    service: {},
    active: false,
  });
  const [deleteService, setDeleteService] = useState({
    service: {},
    active: false,
  });

  return (
    <>
      {services?.length > 0 && (
        <table className="table-auto w-full text-lg">
          <thead>
            <tr>
              <th className="text-start">Наименование</th>
              <th className="text-start">Направление</th>
              <th className="text-start">Кейсы</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id} className="border-y">
                <td>{service.title}</td>
                <td>{service.branch?.title}</td>
                <td>
                  <ul className="list-disc ps-20">
                    {service.cases?.map((serviceCase) => (
                      <>
                        {serviceCase.title && (
                          <li key={serviceCase.id}>{serviceCase.title}</li>
                        )}
                      </>
                    ))}
                  </ul>
                </td>
                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowService({ service: service, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteService({ service: service, active: true });
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
      {services.length === 0 && (
        <div className="text-2xl font-bold">Не найдено ни одной услуги</div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddService(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addService && (
        <AddService
          branches={branches}
          closeHandler={() => {
            setAddService(false);
          }}
        />
      )}
      {showService.active && (
        <UpdateService
          service={showService.service}
          branches={branches}
          closeHandler={() => {
            setShowService({ service: {}, active: false });
          }}
        />
      )}
      {deleteService.active && (
        <DeleteService
          service={deleteService.service}
          closeHandler={() => {
            setDeleteService({ service: {}, active: false });
          }}
        />
      )}
    </>
  );
}
