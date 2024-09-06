import { useContext } from "react";

import PrimaryButton from "../buttons/PrimaryButton";
import ShoppingCart from "../shoppingCart/ShoppingCart";
import Condition from "../misc/Condition";

import { ThemeContext } from "../../store/theme-context";

const PriceCard = ({
  row = "",
  col = "",
  title,
  price,
  mainCondition,
  mainConditionIcon,
  conditions,
  className = "",
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const dummyAddToCartHandler = () => {};

  return (
    <div
      className={`${row} ${col} ${className} max-sm:${bgColor} relative xl:p-30 p-15 border-y border-dashed flex flex-col sm:gap-60 gap-30`}
    >
      <div className="flex flex-col gap-30">
        <div className="flex flex-col gap-15">
          <p className="font-bold font-extended text-gray-400 sm:text-[26px] text-2xl leading-[30px]">
            {title}
          </p>
          <p className="font-title text-gray-400 text-[40px] leading-[44px]">
            {price}
          </p>
        </div>
        <div className="flex flex-col sm:gap-30 gap-15">
          <p className="sm:text-gray-300 text-gray-400 sm:text-lg text-sm font-text font-normal sm:leading-snug leading-tight">
            {children}
          </p>
          <Condition
            className="text-gray-400 sm:text-2xl text-base font-extended font-bold sm:leading-[29px] leading-[18px]"
            icon={mainConditionIcon}
          >
            {mainCondition}
          </Condition>
          <div className="flex flex-col gap-15">
            {conditions.map((condition, index) => (
              <Condition
                key={index}
                className="text-gray-400 sm:text-xl text-sm sm:font-light font-normal font-text sm:leading-relaxed leading-tight"
                icon="add-circle-icon.svg"
              >
                {condition}
              </Condition>
            ))}
          </div>
        </div>
      </div>

      <PrimaryButton
        type="dark"
        className="max-sm:hidden"
      >
        Консультация
      </PrimaryButton>

      <PrimaryButton
        className="sm:hidden [&>button]:py-10 [&>button]:pl-20 [&>button]:pr-10"
        type="accent"
      >
        Заказать
      </PrimaryButton>

      <div className="absolute top-0 right-0">
        <ShoppingCart
          className="border-l border-b p-15"
          addHandler={dummyAddToCartHandler}
        />
      </div>
    </div>
  );
};

export default PriceCard;
