import { useFetcher } from "@remix-run/react";

import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../misc/Checkbox";
import Paperclip from "../misc/Paperclip";
import Contacts from "./Contacts";

const INITIAL_ERRORS = {
  name: "",
  phone: "",
  email: "",
  details: "",
  policy: false,
};

const isPhone = (phone) => {
  const regexp = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/g;
  return regexp.test(phone);
};

const isEmail = (email) => {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return regexp.test(email);
};

const validateForm = (values, setErrors) => {
  const currentErrors = { ...INITIAL_ERRORS };

  if (values.name.length <= 0) currentErrors.name = "Введите имя";
  else if (values.name.length > 100)
    currentErrors.name = "Введено слишком длинное имя";

  if (values.email.length <= 0) currentErrors.email = "Введите Email";
  else if (!isEmail(values.email))
    currentErrors.email = "Введён некорректный Email";

  if (values.phone.length <= 0) currentErrors.phone = "Введите номер телефона";
  else if (!isPhone(values.phone))
    currentErrors.phone = "Введён некорректный номер телефона";

  if (!values.policy) currentErrors.policy = true;

  if (
    currentErrors.name ||
    currentErrors.phone ||
    currentErrors.email ||
    currentErrors.details ||
    currentErrors.policy
  ) {
    setErrors({ ...currentErrors });
    return false;
  } else {
    setErrors(INITIAL_ERRORS);
    return true;
  }
};

const ModalForm = ({
  method = "POST",
  action = "",
  values,
  setValues,
  errors,
  setErrors,
  setSuccess,
  className,
  attachable = false,
  showContacts = false,
  children,
}) => {
  const fetcher = useFetcher();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm(values, setErrors)) return;

    const formData = new FormData(event.target);

    fetcher.submit(formData, { method: "POST", action: "/services" });

    fetcher.data?.success ? setSuccess(true) : setSuccess(false);
  };

  return (
    <fetcher.Form
      className={`${className} grow p-30 flex flex-col justify-between`}
      onSubmit={handleSubmit}
      method={method}
      action={action}
      noValidate
    >
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-title leading-loose">
          Давайте уточним детали
        </p>
        <p className="text-xl text-gray-300 font-text font-light leading-relaxed">
          Заполните форму и мы свяжемся с вами в течение 15 минут
        </p>
      </div>
      <div className="flex flex-col gap-30">
        <div className="">{children}</div>

        <div className="flex justify-between items-start">
          <div className={`${errors.policy && `text-alert`} flex gap-15`}>
            <Checkbox
              name="policy"
              setValues={setValues}
              value={values.policy}
              error={errors.policy}
            />
            <div className="select-none font-text text-base leading-tight">
              <p>Я согласен на обработку персональных данных</p>
              <p className="underline cursor-pointer">
                Политика конфиденциальности
              </p>
            </div>
          </div>

          {attachable && (
            <div className="flex gap-10 items-center">
              <Paperclip />
              <p className="font-text text-[14px] text-gray-300 font-bold leading-tight uppercase">
                Прикрепить файл
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-30">
        {showContacts && <Contacts />}

        <div className="h-[68px] flex items-center">
          <PrimaryButton>Заказать звонок</PrimaryButton>
        </div>
      </div>
    </fetcher.Form>
  );
};

export default ModalForm;
