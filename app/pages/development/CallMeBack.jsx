import CallMeBackInfo from "../../components/modals/callMeBack/CallMeBackInfo";
import ModalForm from "../../components/modals/ModalForm";
import FormInput from "../../components/misc/inputs/FormInput";
import Result from "../../components/modals/Result";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import Contacts from "../../components/modals/Contacts";
import {useState} from "react";
import {useLocation} from "@remix-run/react";
import Section from "../../layout/Section";

const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  details: "",
  policy: false,
};

const CallMeBack = () => {
  const [errors, setErrors] = useState({...INITIAL_VALUES});
  const [values, setValues] = useState({...INITIAL_VALUES});

  //States: false - submit failed, true - submit succeed, null - not submitted
  const [success, setSuccess] = useState(null);

  const location = useLocation();

  return (
    <Section
      id="scenarios"
      inverseColor={true}
    >
      <div
        className={`col-start-1 col-end-5 bg-gray-400 border-gray-300 relative flex max-lg:flex-col striped h-full border border-dashed`}
      >
        <CallMeBackInfo
          inverseColor={true}
          success={success}
          title="Обсудим задачу и зафиксируем, как будем измерять эффект"
          pointsText={[
            "Короткий план работ и метрик. Какие данные собираем и где.",
            "Варианты автоматизации. Там, где уместно — с AI-инструментами.",
            "Оценку рисков и зависимости. Без навязывания лишней разработки.",
            "Дорожную карту пилота. С критериями успеха и чек-листом замеров."
          ]}
        />

        <ModalForm
          className={`${success !== null && `hidden`} striped-dark`}
          method="post"
          action="/services"
          values={values}
          setValues={setValues}
          errors={errors}
          setErrors={setErrors}
          setSuccess={setSuccess}
          title="Давайте уточним детали"
          subtitle="Заполните форму и мы свяжемся с вами в течение 15 минут"
          submitText="Обсудить проект"
          inverseColor={true}
          attachable={true}
          showContacts={false}
        >
          <FormInput
            name="name"
            placeholder="Ваше имя"
            required
            setValues={setValues}
            value={values.name}
            error={errors.name}
            inverseColor={true}
          />
          <FormInput
            name="phone"
            placeholder="Телефон"
            type="tel"
            required
            setValues={setValues}
            value={values.phone}
            error={errors.phone}
            inverseColor={true}
          />
          <FormInput
            name="email"
            placeholder="E-mail"
            type="email"
            required
            setValues={setValues}
            value={values.email}
            error={errors.email}
            inverseColor={true}
          />
          <FormInput
            className="lg:h-[150px] sm:h-[120px] h-[70px] border-b"
            name="details"
            placeholder="Важные детали проекта: требования, сроки и нюансы"
            type="textarea"
            setValues={setValues}
            value={values.details}
            error={errors.details}
            inverseColor={true}
          />
          <FormInput
            className="hidden"
            name="path"
            type="text"
            value={location.pathname}
            inverseColor={true}
          />
          <FormInput
            className="hidden"
            name="request-type"
            type="text"
            value="consultation-request"
            inverseColor={true}
          />
        </ModalForm>

        <Result
          className={`${
            success === null && `hidden`
          } max-sm:justify-between max-sm:h-[calc(100svh-30px*2)] max-sm:pb-0`}
          success={success}
          phone={values.phone}
          inverseColor={true}
        />

        <div
          className={`${
            success !== null ? `hidden` : `sm:hidden`
          } bg-gray-400 text-gray-100 flex flex-col sm:gap-15 gap-30 p-15 h-full justify-between`}
        >
          <PrimaryButton
            className={success === null && `hidden`}
            onClick={() => {}}
            type="accent-to-light"
          >
            Жду звонка
          </PrimaryButton>

          <div className="flex flex-col gap-20">
            <p className="font-extended font-bold text-[22px] leading-6">
              Контакты:
            </p>
            <Contacts inverseColor={true} />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CallMeBack;