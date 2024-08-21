import { Form } from "@remix-run/react";
import AdminModal from "../Modal";
const AddCase = ({ closeHandler, branches = [] }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className=" font-title text-5xl px-100 pt-180">Новый кейс</div>
        <Form
          method="POST"
          action="/admin/case"
          className="flex flex-col gap-10 px-100 py-30"
        >
          <input
            type="text"
            name="title"
            placeholder="Заголовок"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <textarea
            type="text"
            rows={5}
            name="description"
            placeholder="Краткое описание"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          />
          <input
            type="text"
            name="image"
            placeholder="Имя файла-лого"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <div className="flex flex-col gap-10">
            {branches.map((branch) => (
              <div key={branch.id}>
                <div className="font-subtitle text-xl">{branch.title}</div>
                {branch.services?.map((service) => (
                  <div key={service.id} className="flex gap-10">
                    <input
                      type="checkbox"
                      name="serviceIds"
                      id={service.id}
                      value={service.id}
                    />
                    <label htmlFor={service.id}>{service.title}</label>
                  </div>
                ))}
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

export default AddCase;
