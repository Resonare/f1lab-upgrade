import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import AddClient from "./Add";
import UpdateClient from "./Update";
import DeleteClient from "./Delete";

export default function ListClients({ items = [] }) {
  const [addClient, setAddClient] = useState(false);
  const [showClient, setShowClient] = useState({ client: {}, active: false });
  const [deleteClient, setDeleteClient] = useState({
    client: {},
    active: false,
  });

  return (
    <>
      {items?.length > 0 && (
        <table className="table-auto w-full text-lg ">
          <thead>
            <tr>
              <th className="text-start">Наименование</th>
              <th className="text-start">Описание</th>
              <th className="text-start">Путь до логотипа</th>
            </tr>
          </thead>
          <tbody>
            {items.map((client) => (
              <tr key={client.id} className="border-y ">
                <td>{client.title}</td>
                <td>{client.description}</td>
                <td>{client.logoPath}</td>
                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowClient({ client: client, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteClient({ client: client, active: true });
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
        <div className="text-2xl font-bold">Не найдено ни одного клиента</div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddClient(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addClient && (
        <AddClient
          closeHandler={() => {
            setAddClient(false);
          }}
        />
      )}
      {showClient.active && (
        <UpdateClient
          client={showClient.client}
          closeHandler={() => {
            setShowClient({ client: {}, active: false });
          }}
        />
      )}
      {deleteClient.active && (
        <DeleteClient
          client={deleteClient.client}
          closeHandler={() => {
            setDeleteClient({ client: {}, active: false });
          }}
        />
      )}
    </>
  );
}
