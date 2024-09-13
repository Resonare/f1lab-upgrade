import PrimaryButton from "../buttons/PrimaryButton";
import Checkbox from "../misc/Checkbox";
import Paperclip from "../misc/Paperclip";
import Contacts from "./Contacts";

const Form = ({
  onSubmit,
  values,
  setValues,
  errors,
  className,
  attachmable = false,
  showContacts = false,
  children,
}) => {
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
        <div className="">{children}</div>

        <div className="flex justify-between items-start">
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

          {attachmable && (
            <div className="flex gap-10 items-center">
              <Paperclip />
              <p className="font-text text-[14px] text-gray-300 font-bold leading-tight uppercase">
                Прикрепить файл
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col gap-30">
        {showContacts && <Contacts />}

        <div className="h-[68px] flex items-center">
          <PrimaryButton>Заказать звонок</PrimaryButton>
        </div>
      </div>
    </form>
  );
};

export default Form;
