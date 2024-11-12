import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

const DeleteBranch = ({ branch = {}, closeHandler }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className="font-title text-2xl mb-40">
          Уверены, что хотите удалить направление {branch.title} и все связанные
          с ним услуги?
        </div>
        <Form
          method="DELETE"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            value={branch.id}
            readOnly
            type="text"
            name="id"
            placeholder="ID"
            className="hidden"
          />
          <div className="flex gap-20">
            <button
              type="submit"
              name="intent"
              value="delete"
              className="rounded-md bg-alert text-gray-100 text-2xl p-10 font-text w-1/2"
            >
              Удалить
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

export default DeleteBranch;
