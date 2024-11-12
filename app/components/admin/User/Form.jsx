import { useFetcher } from "@remix-run/react";
import { useEffect } from "react";

const UserForm = ({ closeHandler, intent = "signin", user = {} }) => {
  const fetcher = useFetcher();
  const fetcherData = fetcher.data;

  const formOptions = {
    buttonTitle:
      intent === "add"
        ? "Добавить"
        : intent === "update"
        ? "Изменить"
        : "Войти",
  };

  const nameError = fetcherData?.errors?.name;
  const passwordError = fetcherData?.errors?.password;

  const submitHandler = (event) => {
    event.preventDefault();
    fetcher.submit(event.currentTarget, {
      method: "POST",
    });
  };

  useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data && !fetcher.data.errors) {
      closeHandler();
    }
  }, [fetcher.state, fetcher.data]);

  return (
    <>
      <fetcher.Form className="flex flex-col gap-20" onSubmit={submitHandler}>
        <label htmlFor="name" className="text-sm text-gray-300 leading-tight">
          Имя{" "}
          {nameError && <span className="text-alert px-10">{nameError}</span>}
        </label>
        <input
          required
          defaultValue={user?.name}
          type="text"
          name="name"
          id="name"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full "
        />
        <label
          htmlFor="password"
          className="text-sm text-gray-300 leading-tight"
        >
          Пароль{" "}
          {passwordError && (
            <span className="text-alert px-10">{passwordError}</span>
          )}
        </label>
        <input
          required
          defaultValue={user?.password}
          type="password"
          name="password"
          className="border border-gray-200 px-10 rounded-md placeholder:text-gray-200 text-md font-text h-40 w-full"
        />
        <input hidden type="text" name="intent" defaultValue={intent} />
        <input hidden type="text" name="id" defaultValue={user?.id} />
        <button
          type="submit"
          className="rounded-md bg-gray-400 text-gray-100 text-2xl p-10 font-text w-200"
        >
          {formOptions.buttonTitle}
        </button>
      </fetcher.Form>
    </>
  );
};

export default UserForm;
