import { useContext } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import Condition from "../misc/Condition";

import { ThemeContext } from "../../store/theme-context";

const TariffInfo = ({
  title,
  price,
  mainCondition,
  mainConditionIcon,
  conditions,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const dummyAddToCartHandler = () => {};

  return (
    <div
      className={`${bgColor} w-[50%] h-full p-30 border-dashed flex flex-col justify-between`}
    >
      <div className="flex flex-col gap-30">
        <div>
          <img src="/images/confirm-circle.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          <p className="font-title text-[28px] leading-loose">{title}</p>
          <p className="font-title text-[40px] leading-[44px]">{price}</p>
        </div>
        <div className="text-gray-300 text-base font-text font-light leading-tight">
          {children}
        </div>
        <div className="flex flex-col gap-30">
          <Condition
            className="text-gray-400 text-[22px] font-extended font-bold leading-relaxed"
            icon={mainConditionIcon}
          >
            {mainCondition}
          </Condition>
          <div className="flex flex-col gap-15">
            {conditions.map((condition, index) => (
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
      </div>

      <div className="w-fit p-5 bg-gray-400 rounded-[10px] gap-5 flex">
        <div className="flex items-center p-15 bg-f1-light rounded-[5px]">
          <div className="h-fit text-base font-title leading-[18px]">Ежемесячно</div>
        </div>
        <div className="flex gap-15 items-center px-15 py-5 bg-gray-300 rounded-[5px]">
          <div className="h-fit text-gray-100 text-base font-subtitle leading-[18px]">
            За год
          </div>
          <div className="bg-gray-100 p-15 rounded-sm">
            <div className="text-base font-title leading-[18px]">
              Экономия 15%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffInfo;
