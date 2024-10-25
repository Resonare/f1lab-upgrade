import PrimaryButton from "../buttons/PrimaryButton";
import Contacts from "./Contacts";

const Result = ({ phone, className, success, onClose }) => {
  return (
    <div
      className={`${className} max-lg:h-[550px] xl:w-auto lg:w-[50%] w-full grow p-30 flex flex-col justify-between`}
    >
      <div className={`${!success && `hidden`}`}>
        <svg
          width="102"
          height="102"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math">
            <path
              id="Vector"
              d="M51 101C78.6146 101 101 78.6146 101 51C101 23.3858 78.6146 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6146 23.3858 101 51 101Z"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M70.1952 36.1895L43.8704 69.0954L30.708 59.2236"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>

      <div className={`${success && `hidden`}`}>
        <svg
          width="102"
          height="102"
          viewBox="0 0 102 102"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math">
            <path
              id="Vector"
              d="M51 101C78.6146 101 101 78.6146 101 51C101 23.3858 78.6146 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6146 23.3858 101 51 101Z"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M70.1952 36.1895L43.8704 69.0954L30.708 59.2236"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
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

      <div className="flex flex-col gap-15">
        <PrimaryButton onClick={onClose}>Жду звонка</PrimaryButton>

        <div className="lg:hidden flex flex-col gap-20">
          <p className="font-extended font-bold text-[22px] leading-6">
            Контакты:
          </p>
          <Contacts />
        </div>
      </div>
    </div>
  );
};

export default Result;
