import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import DeleteUser from "./Delete";
import UserForm from "./Form";
import AdminModal from "../Modal";

export default function ListUsers({ items = [] }) {
  const [addUser, setAddUser] = useState(false);
  const [showUser, setShowUser] = useState({
    user: {},
    active: false,
  });
  const [deleteUser, setDeleteUser] = useState({
    user: {},
    active: false,
  });

  return (
    <>
      {items?.length > 0 && (
        <table className="table-auto w-full text-lg">
          <thead>
            <tr>
              <th className="text-start">Имя</th>
            </tr>
          </thead>
          <tbody>
            {items.map((user) => (
              <tr key={user.id} className="border-y">
                <td>{user.name}</td>

                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowUser({ user: user, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteUser({ user: user, active: true });
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
        <div className="text-2xl font-bold">
          Не найдено ни одного пользователя
        </div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddUser(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addUser && (
        <AdminModal
          title="Добавить пользователя"
          closeModal={() => {
            setAddUser(false);
          }}
        >
          <UserForm
            intent="add"
            closeHandler={() => {
              setAddUser(false);
            }}
          />
        </AdminModal>
      )}
      {showUser.active && (
        <AdminModal
          title="Изменить пользователя"
          closeModal={() => {
            setShowUser({ user: {}, active: false });
          }}
        >
          <UserForm
            user={showUser.user}
            intent="update"
            closeHandler={() => {
              setShowUser({ user: {}, active: false });
            }}
          />
        </AdminModal>
      )}
      {deleteUser.active && (
        <DeleteUser
          user={deleteUser.user}
          closeHandler={() => {
            setDeleteUser({ user: {}, active: false });
          }}
        />
      )}
    </>
  );
}
