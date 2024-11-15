import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../components/SectionTitle";
import Animation from "../../components/misc/animations/Animation";
import Condition from "../../components/misc/Condition";
import { LazyImage } from "../../components/LazyImage";
import ModalForm from "../../components/modals/ModalForm";
import FormInput from "../../components/misc/FormInput";
import Result from "../../components/modals/Result";

import whyAnimationJson from "../../components/misc/animations/why-animation.json";

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

const Contacts = () => {
  const location = useLocation();
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  return (
    <Section hero={true}>
      <SectionTitle col="col-start-1 col-end-5">Наши контакты</SectionTitle>

      <div className="col-start-1 col-end-5 row-start-2 flex gap-60 border-t border-gray-200 border-dashed">
        <div className="bg-[#070D14] z-[-11] sm:h-[360px] h-200 basis-8/12 flex justify-center">
          <Animation data={whyAnimationJson} />
        </div>
        <div className="py-60 flex flex-col gap-30 font-text text-xl text-gray-400">
          <Condition icon="location-lg.svg">
            Владивосток, ул. Батарейная, 3А
          </Condition>
          <Condition icon="mail-lg.svg">info@f1lab.ru</Condition>
          <Condition icon="phone-lg.svg">8-800-888-88-88</Condition>

          <div className="flex gap-20">
            <LazyImage className="invert" src="images/icons/instagram-lg.svg" />
            <LazyImage className="invert" src="images/icons/telegram-lg.svg" />
            <LazyImage className="invert" src="images/icons/linkedin-lg.svg" />
            <LazyImage
              className="invert"
              src="images/icons/play-store-lg.svg"
            />
          </div>
        </div>
      </div>

      <div className="col-start-1 col-end-5 relative">
        <div
          className={`${bgColor} absolute w-[calc(100%-4px)] h-full translate-x-[-50%] left-1/2 z-[-1]`}
        ></div>

        <ModalForm
          className={`${success !== null && `hidden`} bg-striped`}
          title="Поговорим о сотрудничестве?"
          method="post"
          action="/services"
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          setSuccess={setSuccess}
          attachable={false}
          showContacts={false}
        >
          <FormInput
            name="name"
            placeholder="Ваше имя"
            required
            setValues={setValues}
            value={values.name}
            error={errors.name}
          />
          <FormInput
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
          } max-sm:justify-between max-sm:h-[calc(100svh-30px*2)] max-sm:pb-0 bg-striped`}
          success={success}
          phone={values.phone}
        />
      </div>
    </Section>
  );
};

export default Contacts;
