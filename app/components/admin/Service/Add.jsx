import { Form } from "@remix-run/react";
import AdminModal from "../Modal";
const AddService = ({ closeHandler, branches = [] }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className="font-title text-5xl mb-40">Новая услуга</div>
        <Form
          method="POST"
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
            name="link"
            placeholder="Линк"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <div className="flex flex-col gap-10">
            <div className="font-subtitle text-xl">Направление</div>
            {branches.map((branch) => (
              <div key={branch.id} className="flex gap-10">
                <input type="radio" name="branchId" value={branch.id} />
                <label htmlFor="branch">{branch.title}</label>
              </div>
            ))}
          </div>
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

export default AddService;
