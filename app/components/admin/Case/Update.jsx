import { Form } from "@remix-run/react";
import AdminModal from "../Modal";

const UpdateServiceCase = ({
  serviceCase = {},
  branches = [],
  closeHandler,
}) => {
  return (
    <>
      <AdminModal closeModal={closeHandler}>
        <Form
          method="PUT"
          action="/admin/case"
          className="flex flex-col gap-20"
          onSubmit={closeHandler}
        >
          <input
            defaultValue={serviceCase.title}
            type="text"
            name="title"
            placeholder="Наименование"
            className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
          />
          <input
            defaultValue={serviceCase.description}
            type="text"
            name="description"
            placeholder="Краткое описание"
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
                      name="serviceId"
                      value={service.id}
                      checked={
                        serviceCase.services.map((s) => s.id).includes[
                          service.id
                        ]
                      }
                    />
                    <label htmlFor="service">{service.title}</label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <input
            defaultValue={serviceCase.id}
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

export default UpdateServiceCase;
