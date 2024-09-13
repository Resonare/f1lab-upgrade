import PrimaryButton from "../../buttons/PrimaryButton";
import Checkbox from "../../misc/Checkbox";
import Input from "../../misc/Input";

const TariffForm = ({ onSubmit, values, setValues, errors, className }) => {
  return (
    <form
      className={`${className} grow p-30 flex flex-col justify-between`}
      onSubmit={onSubmit}
      noValidate
    >
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-title leading-loose">
          Давайте уточним детали
        </p>
        <p className="text-xl text-gray-300 font-text font-light leading-relaxed">
          Заполните форму и мы свяжемся с вами в течение 15 минут
        </p>
      </div>
      <div className="flex flex-col gap-30">
        <div className="">
          <Input
            className="border-b-0"
            name="name"
            placeholder="Ваше имя"
            required
            setValues={setValues}
            value={values.name}
            error={errors.name}
          />
          <Input
            className="border-b-0"
            name="phone"
            placeholder="Телефон"
            type="tel"
            required
            setValues={setValues}
            value={values.phone}
            error={errors.phone}
          />
          <Input
            name="email"
            placeholder="E-mail"
            type="email"
            required
            setValues={setValues}
            value={values.email}
            error={errors.email}
          />
        </div>

        <div className={`${errors.policy && `text-alert`} flex gap-15`}>
          <Checkbox
            name="policy"
            setValues={setValues}
            value={values.policy}
            error={errors.policy}
          />
          <div className="select-none font-text text-base leading-tight">
            <p>Я согласен на обработку персональных данных</p>
            <p className="underline cursor-pointer">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
      <div className="h-[68px] flex items-center">
        <PrimaryButton>Заказать звонок</PrimaryButton>
      </div>
    </form>
  );
};

export default TariffForm;
