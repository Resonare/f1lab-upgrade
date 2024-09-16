import { useContext, useState } from "react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../BackgroundGrid";
import TariffInfo from "./TariffInfo";
import Result from "../Result";
import Cancel from "../Cancel";
import Form from "../Form";
import FormInput from "../../misc/FormInput";

import { ThemeContext } from "../../../store/theme-context";

const INITIAL_ERRORS = {
  name: "",
  phone: "",
  email: "",
  policy: false,
};

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
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
    currentErrors.policy
  ) {
    setErrors({ ...currentErrors });
    return false;
  } else {
    setErrors(INITIAL_ERRORS);
    return true;
  }
};

const TariffModal = ({ opened, tariffModalData, onTariffModalClose }) => {
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  //Variants: monthly, yearly
  const [yearly, setYearly] = useState(false);

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

        <div className={`pr-120 py-90 h-full`}>
          <div
            className={`${bgColor} relative flex pl-120 bg-striped h-full border-[1px] border-dashed border-gray-200`}
          >
            <TariffInfo
              title={tariffModalData.title}
              price={tariffModalData.price}
              yearlyPrice={tariffModalData.yearlyPrice}
              mainCondition={tariffModalData.mainCondition}
              mainConditionIcon={tariffModalData.mainConditionIcon}
              conditions={tariffModalData.conditions}
              yearly={yearly}
              setYearly={setYearly}
              submitted={success !== null}
              opened={opened}
            >
              {tariffModalData.description}
            </TariffInfo>

            <Form
              className={`${success !== null && `hidden`}`}
              onSubmit={handleSubmit}
              values={values}
              setValues={setValues}
              errors={errors}
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
            </Form>

            <Result
              className={`${success === null && `hidden`}`}
              success={success}
              phone={values.phone}
              onClose={onTariffModalClose}
            />

            <Cancel
              className="w-40 h-40 absolute top-30 right-30 cursor-pointer select-none"
              onClick={onTariffModalClose}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default TariffModal;
