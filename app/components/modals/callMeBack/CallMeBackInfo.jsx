import { useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import Contacts from "../Contacts";

const defaultTitle = "Поговорим о сотрудничестве?";

const defualtPointsText = [
  "Текущие задачи и проблемы в IT-инфраструктуре",
  "Подбор решений для поддержки и оптимизации работы",
  "Облачные решения и защиту данных",
  "Детали сотрудничества и условия работы",
  "Поддержка 24/7 и помощь на каждом этапе"
];

const CallMeBackInfo = ({ inverseColor = false, success, title = defaultTitle, pointsText = defualtPointsText }) => {
  const { bgColor } = useContext(ThemeContext);

  const circleOrPoint = (
    <>
      <span className="sm:hidden flex content-center flex-wrap mr-5">
        <svg
          width="5"
          height="5"
          viewBox="0 0 5 5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="2.5" cy="2.5" r="2.5" fill="#01CA9A" />
        </svg>
      </span>
      <span className="max-sm:hidden">·</span>
    </>
  );

  return (
    <div
      className={`${inverseColor ? "bg-gray-400 text-gray-100" : bgColor} ${
        success !== null && `hidden`
      } xl:w-[40%] lg:w-[50%] lg:p-30 sm:p-20 p-15 border-dashed flex flex-col justify-between `}
    >
      <div className="flex flex-col lg:gap-60 gap-30">
        {success ? (
          <h1 className="max-lg:w-[80%] max-sm:mt-40 sm:font-expanded font-extended sm:font-extrabold font-bold lg:text-[44px] sm:text-[40px] text-2xl sm:leading-[44px] leading-[30px]">
            Мы уже в предвкушении обсуждения!
          </h1>
        ) : (
          <h1 className="max-md:w-[80%] max-sm:mt-40 sm:font-expanded font-extended sm:font-extrabold font-bold lg:text-[44px] sm:text-[40px] text-2xl sm:leading-[44px] leading-[30px]">
            {title}
          </h1>
        )}

        <div className="flex flex-col lg:gap-30 sm:gap-15 gap-10">
          <p className="font-extended font-bold text-[22px] leading-6">
            Что обсудим:
          </p>
          <div className="flex flex-col gap-15 font-text sm:font-light sm:text-20 text-sm lg:leading-6 leading-tight">
            {pointsText.map((pointText, index) => (
              <p
                key={index}
                className="flex gap-[2px]"
              >
                {circleOrPoint} {pointText}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="max-lg:hidden flex flex-col gap-30">
        <p className="font-extended font-bold text-[22px] leading-6">
          Контакты:
        </p>
        <Contacts inverseColor={inverseColor} />
      </div>
    </div>
  );
};

export default CallMeBackInfo;
