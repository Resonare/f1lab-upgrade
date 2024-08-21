import { Form } from "@remix-run/react";
import AdminModal from "../Modal";
const AddBranch = ({ closeHandler }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className="font-title text-5xl mb-40">Новое направление</div>
        <Form
          method="POST"
          action="/admin/branch"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            type="text"
            name="title"
            placeholder="Наименование"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            type="text"
            name="color"
            placeholder="Цвет"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <button
            type="submit"
            name="intent"
            value="add"
            className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text w-200"
          >
            Добавить
          </button>
        </Form>
      </AdminModal>
    </>
  );
};

export default AddBranch;
