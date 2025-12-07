import { useContext } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import Contacts from "./Contacts";

import { ThemeContext } from "../../store/theme-context";
import SuccessCircle from "../misc/svg/SuccessCircle";
import FailCircle from "../misc/svg/FailCircle";

const Result = ({
  phone,
  className,
  success,
  showContacts = true,
  onClose,
  inverseColor = false,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${className} ${inverseColor ? "text-gray-100" : ""} max-lg:h-[550px] xl:w-auto lg:w-[50%] w-full sm:grow md:p-30 sm:p-15 pt-15 max-sm:pb-30 flex flex-col gap-60 max-sm:gap-30 sm:justify-between`}
    >
      <SuccessCircle className={`${!success && `hidden`} max-sm:px-15`} />

      <FailCircle className={`${success && `hidden`} max-sm:px-15`} />

      {success && (
        <div className="flex flex-col gap-5 max-sm:px-15">
          <h1 className="sm:text-[40px] text-2xl sm:font-expanded font-extended sm:font-extrabold font-bold sm:leading-[44px] leading-[30px]">
            Заявка получена и уже обрабатывается
          </h1>
          <p className="text-gray-300 sm:text-[22px] text-sm sm:font-extended font-expanded sm:font-bold font-semibold sm:leading-relaxed leading-none">
            В течение 15 минут, мы свяжемся с вами по номеру:
            <span className="text-f1-dark"> {phone}</span>
          </p>
        </div>
      )}

      {!success && (
        <div className="flex flex-col gap-30 max-sm:px-15">
          <div className="flex flex-col gap-15">
            <h1 className="sm:text-[40px] text-2xl sm:font-expanded font-extended sm:font-extrabold font-bold sm:leading-[44px] leading-[30px]">
              Что-то пошло не так
            </h1>
            <div className="sm:text-[22px] text-sm sm:font-extended font-expanded sm:font-bold font-semibold sm:leading-tight leading-none">
              <p className="text-alert">Не удалось отправить заявку.</p>
              <p className="text-gray-300">
                Пока мы работаем над устранением проблемы, <br />
                вы можете связаться с нами другими способами:
              </p>
            </div>
          </div>

          <Contacts className="gap-30 !justify-start" inverseColor={inverseColor} />
        </div>
      )}

      {onClose && (
        <div
          className={`max-sm:${bgColor} flex flex-col gap-15 max-sm:p-15 max-sm:h-full max-sm:justify-between`}
        >
          <PrimaryButton
            type={inverseColor ? `accent-to-light` : `accent`}
            className="max-lg:hidden"
            onClick={onClose}
          >
            {success ? `Жду звонка` : `Закрыть`}
          </PrimaryButton>

          <Contacts className={success ? `lg:hidden` : `hidden`} />

          <PrimaryButton
            type={inverseColor ? `accent-to-light` : `accent`}
            className="lg:hidden"
            onClick={onClose}
          >
            {success ? `Жду звонка` : `Закрыть`}
          </PrimaryButton>
        </div>
      )}
    </div>
  );
};

export default Result;
