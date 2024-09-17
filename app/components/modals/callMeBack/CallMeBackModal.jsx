import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import BlurCurtain from "../BlurCurtain";
import BackgroundGrid from "../../BackgroundGrid";
import Result from "../Result";
import Cancel from "../Cancel";
import ModalForm from "../ModalForm";
import FormInput from "../../misc/FormInput";

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

  const isActive = useModalStore((state) => state.callMeBackModalIsActive);

  return (
    <BlurCurtain
      className={`${
        !isActive && `fixed bottom-[-100%]`
      } text-gray-400 left-0 bottom-0`}
    >
      <div className="m-auto h-full max-w-[1920px]">
        <BackgroundGrid />

        <div className={`px-120 py-90 h-full`}>
          <div
            className={`${bgColor} relative flex bg-striped h-full border-[1px] border-dashed border-gray-200`}
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
              attachable={false}
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
              className={`${success === null && `hidden`}`}
              success={success}
              phone={values.phone}
              onClose={useModalStore((state) => state.closeCallMeBackModal)}
            />

            <Cancel
              className="w-40 h-40 absolute top-30 right-30 cursor-pointer select-none"
              onClick={useModalStore((state) => state.closeCallMeBackModal)}
            />
          </div>
        </div>
      </div>
    </BlurCurtain>
  );
};

export default CallMeBackModal;
