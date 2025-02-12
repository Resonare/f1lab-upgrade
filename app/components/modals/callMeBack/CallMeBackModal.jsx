import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../../layout/BackgroundGrid";
import Result from "../Result";
import Cancel from "../Cancel";
import ModalForm from "../ModalForm";
import FormInput from "../../misc/inputs/FormInput";
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

  const { callMeBackModalIsActive, closeCallMeBackModal, modalData } =
    useModalStore();

  const { title, subtitle, submitText, minimized, inverseColor } = modalData;

  return (
    <BlurCurtain
      className={`${!callMeBackModalIsActive && `fixed bottom-[-100%]`} ${
        inverseColor ? `text-gray-100` : `text-gray-400`
      } left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px] overflow-auto">
        <BackgroundGrid className="flex" customLinesColor="border-gray-300"/>

        <div
          className={`xl:px-120 lg:py-90 lg:px-60 sm:py-[70px] sm:px-[44.1px] py-30 px-15`}
        >
          <div
            className={`${
              inverseColor
                ? `bg-gray-400 border-gray-300`
                : `border-gray-200 ${bgColor}`
            } lg:min-h-[calc(100svh-90px*2)] sm:min-h-[calc(100svh-70px*2)] min-h-[calc(100svh-30px*2)] relative flex max-lg:flex-col striped h-full border mr-[-1px] border-dashed`}
          >
            {!minimized && <CallMeBackInfo success={success} />}

            <ModalForm
              className={`${success !== null && `hidden`}`}
              method="post"
              action="/services"
              values={values}
              setValues={setValues}
              errors={errors}
              setErrors={setErrors}
              setSuccess={setSuccess}
              title={title}
              subtitle={subtitle}
              submitText={submitText}
              inverseColor={inverseColor}
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
                inverseColor={inverseColor}
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
                inverseColor={inverseColor}
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
                inverseColor={inverseColor}
              />
              <FormInput
                className="lg:h-[150px] sm:h-[120px] h-[70px] border-b"
                name="details"
                placeholder="Важные детали проекта: требования, сроки и нюансы"
                type="textarea"
                setValues={setValues}
                value={values.details}
                error={errors.details}
                inverseColor={inverseColor}
              />
              <FormInput
                className="hidden"
                name="path"
                type="text"
                value={location.pathname}
                inverseColor={inverseColor}
              />
              <FormInput
                className="hidden"
                name="request-type"
                type="text"
                value="consultation-request"
                inverseColor={inverseColor}
              />
            </ModalForm>

            <Result
              className={`${
                success === null && `hidden`
              } max-sm:justify-between max-sm:h-[calc(100svh-30px*2)] max-sm:pb-0`}
              success={success}
              phone={values.phone}
              onClose={closeCallMeBackModal}
              inverseColor={inverseColor}
            />

            <div
              className={`${bgColor} ${
                success !== null ? `hidden` : `sm:hidden`
              } flex flex-col sm:gap-15 gap-30 p-15 h-full justify-between`}
            >
              <PrimaryButton
                className={success === null && `hidden`}
                onClick={closeCallMeBackModal}
                type={inverseColor ? `accent-to-light` : `accent`}
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
              inverseColor={inverseColor}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default CallMeBackModal;
