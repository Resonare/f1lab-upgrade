import { useState } from "react";
import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

import PropTypes from "prop-types";
import ImagePicker from "../ImagePicker";

const ClientForm = ({ client = {}, intent = "update", closeHandler }) => {
  const [logoPath, setLogoPath] = useState(client.logoPath || "");

  const title =
    intent === "add"
      ? "Новый клиент"
      : intent === "update"
      ? "Изменить клиента"
      : "Удалить клиента";
  return (
    <>
      <AdminModal title={title} closeModal={closeHandler}>
        <Form
          method="PUT"
          className="flex flex-col gap-20 py-30"
          onSubmit={closeHandler}
        >
          <div className="mb-10">
            <label htmlFor="title">Наименование</label>
            <input
              defaultValue={client.title}
              type="text"
              name="title"
              id="title"
              className="border border-gray-200 px-10 text-md font-text h-40 w-full "
            />
          </div>
          <div className="mb-10">
            <label htmlFor="description">Описание</label>
            <textarea
              defaultValue={client.description}
              type="text"
              rows={3}
              name="description"
              id="description"
              className="border border-gray-200 p-10 text-md font-text w-full"
            />
          </div>
          <div className="mb-10">
            <label htmlFor="logoPath">Логотип</label>
            <input
              hidden
              value={logoPath}
              onChange={() => {}}
              type="text"
              name="logoPath"
              id="logoPath"
              className="border border-gray-200 px-10 text-md font-text h-40 w-full"
            />
            <ImagePicker
              value={logoPath}
              onSelect={setLogoPath}
              path="/images/logo"
            />
          </div>
          <input hidden type="text" name="intent" defaultValue={intent} />
          <input hidden type="text" name="id" defaultValue={client.id} />
          <div className="flex gap-20">
            <button
              type="submit"
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

ClientForm.propTypes = {
  client: PropTypes.object,
  intent: PropTypes.string,
  closeHandler: PropTypes.func,
};

export default ClientForm;
