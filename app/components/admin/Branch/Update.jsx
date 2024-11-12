import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

const UpdateBranch = ({ branch = {}, closeHandler }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <Form
          method="PUT"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            defaultValue={branch.title}
            type="text"
            name="title"
            placeholder="Наименование"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            defaultValue={branch.color}
            type="text"
            name="color"
            placeholder="Цвет"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <input
            defaultValue={branch.id}
            type="text"
            name="id"
            placeholder="ID"
            className="hidden"
          />

          <div className="flex gap-20">
            <button
              type="submit"
              name="intent"
              value="update"
              className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text w-1/2"
            >
              Сохранить
            </button>
            <button
              onClick={closeHandler}
              className="rounded-md bg-gray-200 text-gray-100 text-2xl p-10 font-text w-1/2"
            >
              Отмена
            </button>
          </div>
        </Form>
      </AdminModal>
    </>
  );
};

export default UpdateBranch;
