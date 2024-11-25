import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

const AddCritique = ({ closeHandler, clients = [] }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className="font-title text-5xl mb-40">Новый отзыв</div>
        <Form
          method="POST"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            type="text"
            name="title"
            placeholder="Имя"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            type="text"
            name="subtitle"
            placeholder="Должность"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <input
            type="text"
            name="avatarPath"
            placeholder="Путь до аватара"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <textarea
            type="text"
            rows={5}
            name="body"
            placeholder="Текст отзыва"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text w-full"
          />

          <div className="flex flex-col gap-10">
            <p className="font-expanded font-extrabold text-2xl">
              Какой компании принадлежит отзыв?
            </p>
            {clients.map((client) => (
              <div key={client.id} className="flex gap-5">
                <input
                  type="radio"
                  name="clientId"
                  id={client.title}
                  value={client.id}
                />
                <label htmlFor={client.title} className="font-subtitle text-lg">
                  {client.title}
                </label>
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

export default AddCritique;
