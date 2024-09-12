import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../misc/Checkbox";
import Input from "../misc/Input";

const TariffForm = () => {
  return (
    <div className="grow p-30 flex flex-col justify-between">
      <div className="flex flex-col gap-5">
        <p className="text-[28px] font-title leading-loose">
          Давайте уточним детали
        </p>
        <p className="text-xl text-gray-300 font-text font-light leading-relaxed">
          Заполните форму и мы свяжемся с вами в течение 15 минут
        </p>
      </div>
      <div className="flex flex-col gap-30">
        <div>
          <Input placeholder="Ваше имя" required />
          <Input placeholder="Телефон" required />
          <Input placeholder="E-mail" required />
        </div>

        <div className="flex gap-15">
          <Checkbox id="policyCheck" />
          <div className="font-text text-base leading-tight">
            <label htmlFor="policyCheck">
              Я согласен на обработку персональных данных
            </label>
            <p className="underline cursor-pointer">
              Политика конфиденциальности
            </p>
          </div>
        </div>
      </div>
      <div className="h-[68px] flex items-center">
        <PrimaryButton>Заказать звонок</PrimaryButton>
      </div>
    </div>
  );
};

export default TariffForm;
