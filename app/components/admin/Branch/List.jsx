import { useState } from "react";

import SecondaryButton from "../../buttons/SecondaryButton";
import AddBranch from "./Add";
import UpdateBranch from "./Update";
import DeleteBranch from "./Delete";

export default function ListBranches({ branches = [] }) {
  const [addBranch, setAddBranch] = useState(false);
  const [showBranch, setShowBranch] = useState({ branch: {}, active: false });
  const [deleteBranch, setDeleteBranch] = useState({
    branch: {},
    active: false,
  });

  return (
    <>
      {branches?.length > 0 && (
        <table className="table-auto w-full text-lg ">
          <thead>
            <tr>
              <th className="text-start">Наименование</th>
              <th className="text-start">Цвет</th>
              <th className="text-start">Услуги</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((branch) => (
              <tr key={branch.id} className="border-y ">
                <td>{branch.title}</td>
                <td>{branch.color}</td>
                <td>
                  {branch.services?.map((service) => (
                    <div key={service.id}>{service.title}</div>
                  ))}
                </td>
                <td>
                  <div className="flex gap-20">
                    <div className="text-gray-300 hover:text-f1-light">
                      <button
                        onClick={() => {
                          setShowBranch({ branch: branch, active: true });
                        }}
                      >
                        Изменить
                      </button>
                    </div>
                    <div className="text-alert">
                      <button
                        onClick={() => {
                          setDeleteBranch({ branch: branch, active: true });
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
      {branches.length === 0 && (
        <div className="text-2xl font-bold">
          Не найдено ни одного направления
        </div>
      )}
      <div className="mt-30">
        <SecondaryButton
          className="border-x"
          onClick={() => {
            setAddBranch(true);
          }}
          variant="shaded"
        >
          Добавить
        </SecondaryButton>
      </div>
      {addBranch && (
        <AddBranch
          closeHandler={() => {
            setAddBranch(false);
          }}
        />
      )}
      {showBranch.active && (
        <UpdateBranch
          branch={showBranch.branch}
          closeHandler={() => {
            setShowBranch({ branch: {}, active: false });
          }}
        />
      )}
      {deleteBranch.active && (
        <DeleteBranch
          branch={deleteBranch.branch}
          closeHandler={() => {
            setDeleteBranch({ branch: {}, active: false });
          }}
        />
      )}
    </>
  );
}
