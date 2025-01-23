import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import AddCritique from "./Add";
import UpdateCritique from "./Update";
import DeleteCritique from "./Delete";

export default function ListCritiques({ items = [], clients = [] }) {
  const [addCritique, setAddCritique] = useState(false);
  const [showCritique, setShowCritique] = useState({
    critique: {},
    active: false,
  });
  const [deleteCritique, setDeleteCritique] = useState({
    critique: {},
    active: false,
  });

  return (
    <>
      {items?.length > 0 && (
        <table className="table-auto w-full text-lg ">
          <thead>
            <tr>
              <th className="text-start">Имя</th>
              <th className="text-start">Должность</th>
              <th className="text-start">Путь до аватара</th>
              <th className="text-start">Путь до логотипа</th>
              <th className="text-start">Текст отзыва</th>
            </tr>
          </thead>
          <tbody>
            {items.map((critique) => (
              <tr key={critique.id} className="border-y">
                <td>{critique.title}</td>
                <td>{critique.subtitle}</td>
                <td>{critique.avatarPath}</td>
                <td>{critique.logoPath}</td>
                <td>{critique.body}</td>
                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowCritique({ critique: critique, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteCritique({
                            critique: critique,
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
        <div className="text-2xl font-bold">Не найдено ни одного отзыва</div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddCritique(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addCritique && (
        <AddCritique
          clients={clients}
          closeHandler={() => {
            setAddCritique(false);
          }}
        />
      )}
      {showCritique.active && (
        <UpdateCritique
          critique={showCritique.critique}
          clients={clients}
          closeHandler={() => {
            setShowCritique({ critique: {}, active: false });
          }}
        />
      )}
      {deleteCritique.active && (
        <DeleteCritique
          critique={deleteCritique.critique}
          closeHandler={() => {
            setDeleteCritique({ critique: {}, active: false });
          }}
        />
      )}
    </>
  );
}
