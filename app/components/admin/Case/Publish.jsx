import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

import PropTypes from "prop-types";

const PublishCase = ({ serviceCase = {}, closeHandler }) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <div className="font-title text-2xl mb-40">Уверены?</div>
        <Form
          method="POST"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            value={serviceCase.id}
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
              value="publish"
              className="rounded-md bg-f1-dark text-gray-100 text-2xl p-10 font-text w-1/2"
            >
              Опубликовать
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

PublishCase.propTypes = {
  serviceCase: PropTypes.object,
  closeHandler: PropTypes.func,
};

export default PublishCase;
