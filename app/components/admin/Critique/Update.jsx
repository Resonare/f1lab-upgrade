import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

const UpdateCritique = ({ critique = {}, clients = [], closeHandler }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <Form
          method="PUT"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            defaultValue={critique.title}
            type="text"
            name="title"
            placeholder="Имя"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            defaultValue={critique.subtitle}
            type="text"
            name="subtitle"
            placeholder="Должность"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <input
            defaultValue={critique.avatarPath}
            type="text"
            name="avatarPath"
            placeholder="Путь до аватара"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <input
            defaultValue={critique.logoPath}
            type="text"
            name="logoPath"
            placeholder="Путь до логотипа"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
          />
          <textarea
            defaultValue={critique.body}
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
                  checked={critique.clientId == client.id}
                />
                <label htmlFor={client.title} className="font-subtitle text-lg">
                  {client.title}
                </label>
              </div>
            ))}
          </div>

          <input
            defaultValue={critique.id}
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

export default UpdateCritique;
