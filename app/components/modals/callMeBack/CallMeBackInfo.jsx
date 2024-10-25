import { useContext } from "react";

import { ThemeContext } from "../../../store/theme-context";
import Contacts from "../Contacts";

const CallMeBackInfo = ({ success }) => {
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
      className={`${bgColor} xl:w-[40%] lg:w-[50%] lg:p-30 sm:p-20 p-15 border-dashed flex flex-col justify-between transition-all`}
    >
      <div className="flex flex-col lg:gap-60 gap-30">
        {success ? (
          <h1 className="max-md:w-[80%] max-sm:mt-40 sm:font-expanded font-extended sm:font-extrabold font-bold lg:text-[44px] sm:text-[40px] text-2xl sm:leading-[44px] leading-[30px]">
            Мы уже в предвкушении обсуждения!
          </h1>
        ) : (
          <h1 className="max-md:w-[80%] max-sm:mt-40 sm:font-expanded font-extended sm:font-extrabold font-bold lg:text-[44px] sm:text-[40px] text-2xl sm:leading-[44px] leading-[30px]">
            Поговорим о сотрудничестве?
          </h1>
        )}

        <div className="flex flex-col lg:gap-30 sm:gap-15 gap-10">
          <p className="font-extended font-bold text-[22px] leading-6">
            Что обсудим:
          </p>
          <div className="flex flex-col gap-15 font-text font-light text-20 lg:leading-6 leading-4">
            <p className="flex">
              {circleOrPoint} Текущие задачи и проблемы в IT-инфраструктуре
            </p>
            <p className="flex">
              {circleOrPoint} Подбор решений для поддержки и оптимизации работы
            </p>
            <p className="flex">
              {circleOrPoint} Облачные решения и защиту данных
            </p>
            <p className="flex">
              {circleOrPoint} Детали сотрудничества и условия работы
            </p>
            <p className="flex">
              {circleOrPoint} Поддержка 24/7 и помощь на каждом этапе
            </p>
          </div>
        </div>
      </div>

      <div className="max-lg:hidden flex flex-col gap-30">
        <p className="font-extended font-bold text-[22px] leading-6">
          Контакты:
        </p>
        <Contacts />
      </div>
    </div>
  );
};

export default CallMeBackInfo;
