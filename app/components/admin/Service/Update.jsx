import { Form } from "@remix-run/react";
import AdminModal from "../Modal";
import { useState } from "react";

const UpdateBranch = ({ service, branches = [], closeHandler }) => {
  const [selectedBranch, setSelectedBranch] = useState(service.branchId);

  const selectedBranchHandler = (event) => {
    setSelectedBranch(+event.target.value);
  };

  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <Form
          method="POST"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input defaultValue={service.id} type="text" name="id" hidden />
          <input
            defaultValue={service.title}
            type="text"
            name="title"
            placeholder="Наименование"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            defaultValue={service.link}
            type="text"
            name="link"
            placeholder="Линк"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <div className="flex flex-col gap-10">
            <div className="font-subtitle text-xl">Направление</div>
            {branches.map((branch) => (
              <div key={branch.id} className="flex gap-10">
                <input
                  type="radio"
                  id="branch"
                  name="branchId"
                  value={branch.id}
                  checked={selectedBranch === branch.id}
                  onChange={selectedBranchHandler}
                />
                <label htmlFor="branchId">{branch.title}</label>
              </div>
            ))}
          </div>
          <button
            type="submit"
            name="intent"
            value="update"
            className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text w-200"
          >
            Сохранить
          </button>
        </Form>
      </AdminModal>
    </>
  );
};

export default UpdateBranch;
