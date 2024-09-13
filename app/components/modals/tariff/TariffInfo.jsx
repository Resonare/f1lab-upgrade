import { useContext } from "react";

import Condition from "../../misc/Condition";

import { ThemeContext } from "../../../store/theme-context";

const TariffInfo = ({
  title,
  price,
  yearlyPrice,
  mainCondition,
  mainConditionIcon,
  conditions,
  yearly,
  setYearly,
  submitted,
  opened,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const handleMonthlyClick = () => {
    setYearly(false);
  };

  const handleYearlyClick = () => {
    setYearly(true);
  };

  return (
    <div
      className={`${bgColor} w-[40%] h-full p-30 border-dashed flex flex-col justify-between`}
    >
      <div>
        <img src="/images/confirm-circle.svg" alt="" />
      </div>
      <div className="flex flex-col gap-30 transition-all">
        <div className="flex flex-col">
          <p className="font-title text-[28px] leading-[44px]">{title}</p>
          <p
            className={`${
              !yearly && `opacity-0 mt-[-22px]`
            } font-extended font-bold text-gray-200 text-[22px] line-through leading-[26px] transition-all`}
          >
            {price}
          </p>
          <div className={`flex justify-between transition-all`}>
            <p className="h-fit font-title text-[40px] leading-[44px]">
              {yearly ? yearlyPrice : price}
            </p>
            <div
              className={`${
                !yearly && ` opacity-0`
              } w-[45%] flex justify-start gap-15 text-f1-dark transition-all`}
            >
              <p className="h-fit text-[40px] font-title leading-[44px]">
                -15%
              </p>
              <p className="h-fit font-text font-light text-base leading-tight">
                при оплате за 12 месяцев
              </p>
            </div>
          </div>
        </div>
        <div className="text-gray-300 text-base font-text font-light leading-tight">
          {children}
        </div>
        {opened && (
          <div className="flex flex-col gap-30">
            <Condition
              className="text-gray-400 text-[22px] font-extended font-bold leading-relaxed"
              icon={mainConditionIcon}
              iconClassName="w-30"
            >
              {mainCondition}
            </Condition>
            <div className="flex flex-col gap-15">
              {conditions?.map((condition, index) => (
                <Condition
                  key={index}
                  className="text-xl font-light font-text leading-relaxed"
                  icon="add-circle-icon.svg"
                >
                  {condition}
                </Condition>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="bg-gray-400 w-fit p-5 rounded-[10px] gap-5 flex select-none">
        <div
          className={`${submitted && yearly && `hidden`} ${
            !yearly
              ? `bg-f1-light text-gray-400`
              : `bg-gray-300 hover:bg-gray-200 text-gray-100`
          } h-60 cursor-pointer flex items-center p-15 rounded-[5px] transition-all`}
          onClick={handleMonthlyClick}
        >
          <p className="h-fit text-base font-title leading-[18px]">
            Ежемесячно
          </p>
        </div>
        <div
          className={`${submitted && !yearly && `hidden`} ${
            yearly
              ? `bg-f1-light text-gray-400`
              : `bg-gray-300 hover:bg-gray-200 text-gray-100`
          } h-60 cursor-pointer flex gap-15 items-center px-15 py-5 rounded-[5px] transition-all`}
          onClick={handleYearlyClick}
        >
          <p className="h-fit text-base font-subtitle leading-[18px]">За год</p>
          <div className="bg-gray-100 p-15 rounded-sm h-full">
            <p className="text-gray-400 text-base font-title leading-[18px]">
              Экономия 15%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffInfo;
