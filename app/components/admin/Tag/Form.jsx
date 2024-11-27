import { useState } from "react";
import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

import PropTypes from "prop-types";

const TagForm = ({ tag = {}, intent = "update", closeHandler }) => {
  const title =
    intent === "add"
      ? "Новый тэг"
      : intent === "update"
      ? "Изменить тэг"
      : "Удалить тэг";
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
              defaultValue={tag.title}
              type="text"
              name="title"
              id="title"
              className="border border-gray-200 px-10 text-md font-text h-40 w-full "
            />
          </div>
          <div className="mb-10">
            <label htmlFor="color">Цвет</label>
            <input
              defaultValue={tag.color}
              type="text"
              name="color"
              id="color"
              className="border border-gray-200 px-10 text-md font-text h-40 w-full "
            />
          </div>
          <div className="mb-10">
            <label htmlFor="link">Ссылка</label>
            <input
              defaultValue={tag.link}
              type="text"
              name="link"
              id="link"
              className="border border-gray-200 px-10 text-md font-text h-40 w-full "
            />
          </div>
          <input hidden type="text" name="intent" defaultValue={intent} />
          <input hidden type="text" name="id" defaultValue={tag.id} />
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

TagForm.propTypes = {
  tag: PropTypes.object,
  intent: PropTypes.string,
  closeHandler: PropTypes.func,
};

export default TagForm;
