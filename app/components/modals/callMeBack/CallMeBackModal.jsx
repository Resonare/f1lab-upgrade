import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../BackgroundGrid";
import Result from "../Result";
import Cancel from "../Cancel";
import ModalForm from "../ModalForm";
import FormInput from "../../misc/FormInput";
import PrimaryButton from "../../buttons/PrimaryButton";
import Contacts from "../Contacts";

import { ThemeContext } from "../../../store/theme-context";
import CallMeBackInfo from "./CallMeBackInfo";
import useModalStore from "../../../store/modal";

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

const CallMeBackModal = () => {
  const location = useLocation();
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  const { callMeBackModalIsActive, closeCallMeBackModal } = useModalStore();

  return (
    <BlurCurtain
      className={`${
        !callMeBackModalIsActive && `fixed bottom-[-100%]`
      } text-gray-400 left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px] overflow-auto">
        <BackgroundGrid className="flex" />

        <div
          className={`xl:px-120 lg:py-90 lg:px-60 sm:py-[70px] sm:px-[44.1px] py-30 px-15`}
        >
          <div
            className={`${bgColor} lg:min-h-[calc(100svh-90px*2)] sm:min-h-[calc(100svh-70px*2)] min-h-[calc(100svh-30px*2)] relative flex max-lg:flex-col bg-striped h-full border-[1px] border-dashed border-gray-200`}
          >
            <CallMeBackInfo success={success} />

            <ModalForm
              className={`${success !== null && `hidden`}`}
              method="post"
              action="/services"
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              setSuccess={setSuccess}
              attachable={true}
              showContacts={false}
            >
              <FormInput
                // className="border-b-0"
                name="name"
                placeholder="Ваше имя"
                required
                setValues={setValues}
                value={values.name}
                error={errors.name}
              />
              <FormInput
                // className="border-b-0"
                name="phone"
                placeholder="Телефон"
                type="tel"
                required
                setValues={setValues}
                value={values.phone}
                error={errors.phone}
              />
              <FormInput
                // className="border-b-0"
                name="email"
                placeholder="E-mail"
                type="email"
                required
                setValues={setValues}
                value={values.email}
                error={errors.email}
              />
              <FormInput
                className="lg:h-[150px] sm:h-[120px] h-[70px] border-b"
                name="details"
                placeholder="Важные детали проекта: требования, сроки и нюансы"
                type="textarea"
                setValues={setValues}
                value={values.details}
                error={errors.details}
              />
              <FormInput
                className="hidden"
                name="path"
                type="text"
                value={location.pathname}
              />
              <FormInput
                className="hidden"
                name="request-type"
                type="text"
                value="consultation-request"
              />
            </ModalForm>

            <Result
              className={`${
                success === null && `hidden`
              } max-sm:justify-between max-sm:h-[calc(100svh-30px*2)] max-sm:pb-0`}
              success={success}
              phone={values.phone}
              onClose={closeCallMeBackModal}
            />

            <div
              className={`${bgColor} ${
                success !== null ? `hidden` : `sm:hidden`
              } flex flex-col sm:gap-15 gap-30 p-15 h-full justify-between`}
            >
              <PrimaryButton
                className={success === null && `hidden`}
                onClick={closeCallMeBackModal}
              >
                Жду звонка
              </PrimaryButton>

              <div className="flex flex-col gap-20">
                <p className="font-extended font-bold text-[22px] leading-6">
                  Контакты:
                </p>
                <Contacts />
              </div>
            </div>

            <Cancel
              className="w-40 h-40 absolute sm:top-30 top-15 sm:right-30 right-15"
              onClick={closeCallMeBackModal}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default CallMeBackModal;
