import { useContext, useState } from "react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../BackgroundGrid";
import Result from "../Result";
import Cancel from "../Cancel";
import Form from "../Form";
import FormInput from "../../misc/FormInput";

import { ThemeContext } from "../../../store/theme-context";
import RecallInfo from "./RecallInfo";

const INITIAL_ERRORS = {
  name: "",
  phone: "",
  email: "",
  details: "",
  policy: false,
};

const INITIAL_VALUES = {
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

const RecallModal = ({ opened, onRecallModalClose }) => {
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm(values, setErrors)) return;

    //values: values, yearly, tariffModalData.title
    //do smth with backend

    setSuccess(true);
  };

  return (
    <BlurCurtain
      className={`${
        !opened && `fixed bottom-[-100%]`
      } text-gray-400 left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px]">
        <BackgroundGrid />

        <div className={`px-120 py-90 h-full`}>
          <div
            className={`${bgColor} relative flex bg-striped h-full border-[1px] border-dashed border-gray-200`}
          >
            <RecallInfo success={success} />

            <Form
              className={`${success !== null && `hidden`}`}
              onSubmit={handleSubmit}
              values={values}
              setValues={setValues}
              errors={errors}
              attachmable
              showContacts
            >
              <FormInput
                className="border-b-0"
                name="name"
                placeholder="Ваше имя"
                required
                setValues={setValues}
                value={values.name}
                error={errors.name}
              />
              <FormInput
                className="border-b-0"
                name="phone"
                placeholder="Телефон"
                type="tel"
                required
                setValues={setValues}
                value={values.phone}
                error={errors.phone}
              />
              <FormInput
                name="email"
                placeholder="E-mail"
                type="email"
                required
                setValues={setValues}
                value={values.email}
                error={errors.email}
              />
              <FormInput
                className="h-[150px]"
                name="details"
                placeholder="Важные детали проекта: требования, сроки и ньюансы"
                type="textarea"
                setValues={setValues}
                value={values.details}
                error={errors.details}
              />
            </Form>

            <Result
              className={`${success === null && `hidden`}`}
              success={success}
              phone={values.phone}
              onClose={onRecallModalClose}
            />

            <Cancel
              className="w-40 h-40 absolute top-30 right-30 cursor-pointer select-none"
              onClick={onRecallModalClose}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default RecallModal;
