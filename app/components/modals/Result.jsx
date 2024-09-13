import PrimaryButton from "../buttons/PrimaryButton";
import Contacts from "./Contacts";

const Result = ({ phone, className, success, onClose }) => {
  return (
    <div className={`${className} grow p-30 flex flex-col justify-between`}>
      <div className={`${!success && `hidden`}`}>
        <img src="/images/confirm-circle.svg" alt="" />
      </div>

      <div className={`${success && `hidden`}`}>
        <img src="/images/confirm-circle.svg" alt="" />
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="text-[40px] font-title leading-[44px]">
          Заявка получена и уже обрабатывается
        </h1>
        <p className="text-gray-300 text-[22px] font-extended font-bold leading-relaxed">
          В течение 15 минут, мы свяжемся с вами по номеру:
          <span className="text-f1-dark"> {phone}</span>
        </p>
      </div>

      <div className="flex flex-col gap-30">
        <Contacts />

        <PrimaryButton onClick={onClose}>Жду звонка</PrimaryButton>
      </div>
    </div>
  );
};

export default Result;
