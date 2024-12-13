import { useContext } from "react";

import useModalStore from "../../store/modal";

import PrimaryButton from "../buttons/PrimaryButton";
import Condition from "../misc/Condition";

import { ThemeContext } from "../../store/theme-context";

const PriceCard = ({
  row = "",
  col = "",
  plan,
  buttonTitle = "Заказать",
  priceClassName = "",
  className = "",
  children,
}) => {
  const { showPlanModal } = useModalStore();
  const { bgColor } = useContext(ThemeContext);

  const { title, price, mainCondition, mainConditionIcon, conditions } = plan;

  return (
    <div
      className={`${row} ${col} ${className} max-sm:${bgColor} xl:p-30 p-15 border-dashed flex flex-col sm:gap-60 gap-30 justify-between`}
    >
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-15">
          <p className="font-bold font-extended text-gray-400 sm:text-[26px] text-2xl leading-[30px]">
            {title}
          </p>
          <p
            className={`${priceClassName} font-title text-gray-400 md:text-[40px] sm:text-[30px] text-[26px] leading-[44px]`}
          >
            {price?.toLocaleString("ru-RU")} ₽
          </p>
        </div>
        <div className="flex flex-col sm:gap-30 gap-15">
          <p className="sm:text-gray-300 text-gray-400 sm:text-base text-sm font-text font-light sm:leading-snug leading-tight">
            {children}
          </p>
          <div className="flex flex-col gap-15">
            <Condition
              className="text-gray-400 sm:text-2xl text-base font-extended font-bold sm:leading-[29px] leading-[18px]"
              icon={mainConditionIcon}
              iconClassName="w-30"
            >
              {mainCondition}
            </Condition>
          </div>
          <div className="flex flex-col gap-15">
            {conditions.map((condition, index) => (
              <Condition
                key={index}
                className="text-gray-400 sm:text-xl text-sm sm:font-light font-normal font-text sm:leading-relaxed leading-tight"
                icon="add-circle-icon.svg"
              >
                {condition.title}
              </Condition>
            ))}
          </div>
        </div>
      </div>

      <PrimaryButton
        type="dark"
        className="max-sm:hidden"
        onClick={() => showPlanModal(plan)}
      >
        {buttonTitle}
      </PrimaryButton>

      <PrimaryButton
        className="sm:hidden [&>button]:py-10 [&>button]:pl-20 [&>button]:pr-10"
        type="accent"
        onClick={() => showPlanModal(plan)}
      >
        {buttonTitle}
      </PrimaryButton>
    </div>
  );
};

export default PriceCard;
