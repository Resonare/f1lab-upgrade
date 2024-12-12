import { useContext, useState } from "react";
import { useLocation } from "@remix-run/react";

import { ThemeContext } from "../../store/theme-context";

import { LazyImage } from "../../components/LazyImage";
import Section from "../../layout/Section";
import SectionTitle from "../../layout/SectionTitle";
import ModalForm from "../../components/modals/ModalForm";
import FormInput from "../../components/misc/inputs/FormInput";
import Result from "../../components/modals/Result";
import ContentCard from "../../components/cards/ContentCard";

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

const Trial = () => {
  const location = useLocation();
  const { bgColor } = useContext(ThemeContext);

  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [values, setValues] = useState(INITIAL_VALUES);

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  return (
    <Section className="max-sm:hidden">
      <div className="col-start-1 lg:col-end-3 col-end-5 flex flex-col justify-between">
        <SectionTitle className="md:leading-[55px] text-[56px]">
          <span className="text-f1-dark">Получите</span> бесплатный 14-дневный
          пробный период
        </SectionTitle>

        <LazyImage
          className="max-lg:hidden h-[45px] w-fit"
          src="/images/icons/pro32.svg"
        />
      </div>

      <div
        className={`${bgColor} max-lg:mt-60 lg:col-start-3 col-start-1 col-end-5 border-y border-l border-dashed border-gray-200`}
      >
        <ContentCard>
          <div className="flex flex-col gap-15">
            <p className="text-[22px] font-extended font-bold">
              Свяжитесь с нами
            </p>
            <p>
              Оцените все преимущества антивирусной защиты PRO32 для вашего
              бизнеса с бесплатным 14-дневным пробным периодом. В этот период вы
              получите полный доступ ко всем функциям продукта, что позволит вам
              убедиться в его эффективности и надежности.
            </p>
          </div>
        </ContentCard>

        <ModalForm
          className={`${
            success !== null && `hidden`
          } border-t striped max-sm:p-0`}
          title=""
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
            className="max-sm:border-y-[0px] border-b"
            name="email"
            placeholder="E-mail"
            type="email"
            required
            setValues={setValues}
            value={values.email}
            error={errors.email}
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

export default Trial;
