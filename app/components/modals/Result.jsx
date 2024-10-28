import { useContext } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import Contacts from "./Contacts";

import { ThemeContext } from "../../store/theme-context";

const Result = ({ phone, className, success, onClose }) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${className} max-lg:h-[550px] xl:w-auto lg:w-[50%] w-full max-sm:h-[calc(100svh-30px*2)] sm:grow sm:p-30 pt-15 flex flex-col max-sm:gap-30 sm:justify-between`}
    >
      <div className={`${!success && `hidden`} max-sm:px-15`}>
        <svg
          className="max-sm:hidden"
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

        <svg
          className="sm:hidden"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3709_13369)">
            <path
              d="M24.8437 49.375C38.2196 49.375 49.0625 38.5321 49.0625 25.1562C49.0625 11.7806 38.2196 0.9375 24.8437 0.9375C11.4681 0.9375 0.625 11.7806 0.625 25.1562C0.625 38.5321 11.4681 49.375 24.8437 49.375Z"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.1422 17.9844L21.3912 33.9232L15.0156 29.1416"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3709_13369">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className={`${success && `hidden`} max-sm:px-15`}>
        <svg
          className="max-sm:hidden"
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

        <svg
          className="sm:hidden"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3709_13369)">
            <path
              d="M24.8437 49.375C38.2196 49.375 49.0625 38.5321 49.0625 25.1562C49.0625 11.7806 38.2196 0.9375 24.8437 0.9375C11.4681 0.9375 0.625 11.7806 0.625 25.1562C0.625 38.5321 11.4681 49.375 24.8437 49.375Z"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M34.1422 17.9844L21.3912 33.9232L15.0156 29.1416"
              stroke="#01CA9A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3709_13369">
              <rect width="50" height="50" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="flex flex-col gap-5 max-sm:px-15">
        <h1 className="sm:text-[40px] text-2xl sm:font-expanded font-extended sm:font-extrabold font-bold sm:leading-[44px] leading-[30px]">
          Заявка получена и уже обрабатывается
        </h1>
        <p className="text-gray-300 sm:text-[22px] text-sm sm:font-extended font-expanded sm:font-bold font-semibold sm:leading-relaxed leading-none">
          В течение 15 минут, мы свяжемся с вами по номеру:
          <span className="text-f1-dark"> {phone}</span>
        </p>
      </div>

      <div
        className={`${bgColor} flex flex-col gap-15 max-sm:p-15 max-sm:h-full max-sm:justify-between`}
      >
        <PrimaryButton className="max-sm:hidden" onClick={onClose}>
          Жду звонка
        </PrimaryButton>

        <div className="lg:hidden flex flex-col gap-20">
          <p className="font-extended font-bold text-[22px] leading-6">
            Контакты:
          </p>
          <Contacts />
        </div>

        <PrimaryButton className="sm:hidden" onClick={onClose}>
          Жду звонка
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Result;
