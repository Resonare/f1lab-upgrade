import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";

import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import Animation from "../../components/misc/animations/Animation";
import Condition from "../../components/misc/Condition";
import { LazyImage } from "../../components/LazyImage";
import ModalForm from "../../components/modals/ModalForm";
import FormInput from "../../components/misc/inputs/FormInput";
import Result from "../../components/modals/Result";

import whyAnimationJson from "../../animations/why-animation.json";

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
    <Section className="sm:mb-200" hero={true}>
      <SectionTitle col="col-start-1 col-end-5 max-sm:mb-30">
        Наши контакты
      </SectionTitle>

      <div className="col-start-1 col-end-5 row-start-2 flex lg:flex-row flex-col lg:items-center sm:gap-60 gap-30 border-t border-gray-200 border-dashed">
        <div className="bg-[#070D14] sm:z-[-11] lg:h-[320px] sm:h-[260px] h-100 lg:basis-8/12 flex justify-center">
          <Animation data={whyAnimationJson} />
        </div>
        <div className="flex h-fit">
          <div className="flex flex-col gap-30 font-text text-xl text-gray-400">
            <Condition icon="location-lg.svg">
              <a
                href="https://go.2gis.com/L6MnY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Владивосток, ул. Батарейная, 3А
              </a>
            </Condition>
            <Condition icon="mail-lg.svg">
              <a href="mailto:info@f1lab.ru">info@f1lab.ru</a>
            </Condition>
            <Condition icon="phone-lg.svg">
              <a href="tel:84232025255">8-423-202-52-55</a>
            </Condition>

            {/* <div className="flex gap-20">
              <LazyImage
                className="invert"
                src="images/icons/instagram-lg.svg"
              />
              <LazyImage
                className="invert"
                src="images/icons/telegram-lg.svg"
              />
              <LazyImage
                className="invert"
                src="images/icons/linkedin-lg.svg"
              />
              <LazyImage
                className="invert"
                src="images/icons/play-store-lg.svg"
              />
            </div> */}
          </div>
        </div>
      </div>

      <div className="max-lg:mt-60 col-start-1 col-end-5 relative">
        <div
          className={`${bgColor} absolute w-[calc(100%-4px)] h-full translate-x-[-50%] left-1/2 z-[-1]`}
        ></div>

        <ModalForm
          className={`${success !== null && `hidden`} striped max-sm:p-0`}
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
            className="max-sm:border-x-[0px]"
            name="name"
            placeholder="Ваше имя"
            required
            setValues={setValues}
            value={values.name}
            error={errors.name}
          />
          <FormInput
            className="max-sm:border-x-[0px]"
            name="phone"
            placeholder="Телефон"
            type="tel"
            required
            setValues={setValues}
            value={values.phone}
            error={errors.phone}
          />
          <FormInput
            className="max-sm:border-x-[0px]"
            name="email"
            placeholder="E-mail"
            type="email"
            required
            setValues={setValues}
            value={values.email}
            error={errors.email}
          />
          <FormInput
            className="lg:h-[150px] sm:h-[120px] h-[70px] border-b max-sm:border-x-[0px]"
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
          } max-sm:justify-between max-sm:h-[calc(100svh-30px*2)] max-sm:pb-0 striped`}
          success={success}
          phone={values.phone}
        />
      </div>
    </Section>
  );
};

export default Contacts;
