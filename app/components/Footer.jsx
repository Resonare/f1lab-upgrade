import { useState } from "react";
import { useFetcher } from "@remix-run/react";
import { NavLink } from "@remix-run/react";

import useModalStore from "../store/modal";
import Section from "../layout/Section";
import PrimaryButton from "./buttons/PrimaryButton";
import Contacts from "./modals/Contacts";
import FormInput from "./misc/inputs/FormInput";
import SecondaryButton from "./buttons/SecondaryButton";

const INITIAL_ERRORS = {
  email: "",
};

const INITIAL_VALUES = {
  email: "",
};

const isEmail = (email) => {
  const regexp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return regexp.test(email);
};

const Footer = () => {
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);
  const [subscribed, setSubscribed] = useState(false);

  const { showFooterModal } = useModalStore();

  const fetcher = useFetcher();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm(values, setErrors)) return;

    const formData = new FormData(event.target);

    console.log(formData);

    fetcher.submit(formData, { method: "POST", action: "/subscribe" });
    fetcher.data?.success ? setSubscribed(true) : setSubscribed(false);
  };

  const validateForm = (values, setErrors) => {
    const currentErrors = { ...INITIAL_ERRORS };

    if (values.email.length <= 0) currentErrors.email = "Введите Email";
    else if (!isEmail(values.email))
      currentErrors.email = "Введён некорректный Email";

    if (currentErrors.email) {
      setErrors({ ...currentErrors });
      return false;
    } else {
      setErrors(INITIAL_ERRORS);
      return true;
    }
  };

  return (
    <Section
      className="sm:py-40 text-gray-100 border-t border-dashed border-gray-300 mt-[-1px]"
      inverseColor={true}
    >
      <div className="col-start-1 md:col-end-3 col-end-5 flex flex-col justify-between gap-60">
        <div className="flex flex-col gap-30">
          <p className="uppercase font-text text-sm font-semibold">Кейсы</p>
          <div className="text-gray-200 flex flex-col gap-15 font-text text-sm">
            <NavLink
              className="hover:underline cursor-pointer"
              to="/cases?branchId=1"
              viewTransition
            >
              IT-консалтинг
            </NavLink>
            <NavLink
              className="hover:underline cursor-pointer"
              to="/cases?branchId=3"
              viewTransition
            >
              Информационная безопасность
            </NavLink>
            <NavLink
              className="hover:underline cursor-pointer"
              to="/cases?branchId=4"
              viewTransition
            >
              Менеджмент облачной инфраструктуры
            </NavLink>
          </div>
        </div>

        <div className="flex flex-col gap-30 pr-30">
          <p className="uppercase font-text text-sm font-semibold">Контакты</p>
          <Contacts
            className="gap-30 sm:justify-start max-sm:flex-col"
            inverseColor={true}
            minimized={true}
          />
        </div>
      </div>

      <div className="flex flex-col gap-30 md:col-start-3 col-start-1 col-end-5 max-md:mt-60 justify-between">
        <div className="flex flex-col gap-15">
          <p className="uppercase font-text text-sm font-semibold">
            На почту мы присылаем:
          </p>
          <div className="text-gray-200 flex flex-col gap-15 font-text text-sm">
            <ul className="text-lg font-light">
              <li>
                <span className="px-10">•</span>Анонсы новых направлений и услуг
                F1Lab
              </li>
              <li>
                <span className="px-10">•</span>Ссылки на полезные новости и
                статьи F1Lab
              </li>
            </ul>
          </div>

          <fetcher.Form
            className={`${subscribed && `hidden`} grid grid-cols-2`}
            onSubmit={(event) => {
              handleSubmit(event);
            }}
          >
            <FormInput
              className="border-b border-gray-300 border-l-0 col-start-1 col-end-3"
              placeholder="E-mail"
              name="email"
              setValues={setValues}
              value={values.email}
              error={errors.email}
              inverseColor={true}
            ></FormInput>

            <SecondaryButton
              variant="dark-shaded"
              className="sm:py-30 border-gray-300 lg:col-start-2 col-start-1 col-end-3 border-t-0"
              titleClassName="text-base"
              onClick={() => {}}
            >
              Подписаться на рассылку
            </SecondaryButton>
          </fetcher.Form>

          <p
            className={`${
              !subscribed && `hidden`
            } uppercase font-text text-sm font-semibold`}
          >
            Вы подписаны на рассылку
          </p>
        </div>

        {/* <div className="flex gap-30">
          <LazyImage src="/images/icons/habr.svg" />
          <LazyImage src="/images/icons/dzen.svg" />
        </div> */}
      </div>

      <PrimaryButton
        className="col-start-1 col-end-5 mt-60"
        type="light"
        onClick={showFooterModal}
      >
        Обратная связь с руководством
      </PrimaryButton>
    </Section>
  );
};

export default Footer;
