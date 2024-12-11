import { useContext, useState } from "react";

import useModalStore from "../../store/modal";

import PrimaryButton from "../buttons/PrimaryButton";
import Condition from "../misc/Condition";

import { ThemeContext } from "../../store/theme-context";

const PriceCard = ({
  row = "",
  col = "",
  plan,
  allConditions,
  buttonTitle = "Купить",
  priceClassName = "",
  className = "",
}) => {
  const { showPlanModal } = useModalStore();
  const { bgColor } = useContext(ThemeContext);

  const { title, price, conditions } = plan;

  const [devicesCount, setDevicesCount] = useState(5);

  const handleAddDevice = () => {
    setDevicesCount((prevDevicesCount) => prevDevicesCount + 1);
  };

  const handleRemoveDevice = () => {
    if (devicesCount < 1) return;

    setDevicesCount((prevDevicesCount) => prevDevicesCount - 1);
  };

  return (
    <div
      className={`${row} ${col} ${className} max-sm:${bgColor} xl:pb-30 pb-15 border-dashed flex flex-col sm:gap-60 gap-30 justify-between`}
    >
      <div className="flex flex-col gap-15">
        <div
          className={`${bgColor} ml-[1px] xl:px-30 px-15 sticky top-[1svh] flex flex-col gap-15 pt-100`}
        >
          <p className="font-extrabold font-expanded border-b border-dashed border-gray-200 pb-15 text-gray-400 sm:text-[40px] text-2xl leading-[44px]">
            {title}
          </p>
        </div>

        <div className="xl:px-30 px-15 flex flex-col sm:gap-30 gap-15">
          <Condition
            className="text-[22px] font-extended font-bold text-gray-400"
            icon="list-locked.svg"
          >
            Лицензия на 12 месяцев
          </Condition>

          <div className="flex flex-col gap-15">
            {allConditions.map((condition, index) => (
              <Condition
                key={index}
                className="text-gray-400 sm:text-xl text-sm sm:font-light font-normal font-text sm:leading-relaxed leading-tight"
                icon={
                  conditions.includes(condition)
                    ? "add-circle-icon.svg"
                    : "add-circle-disabled-icon.svg"
                }
              >
                {condition}
              </Condition>
            ))}
          </div>
        </div>
      </div>

      <div className="xl:px-30 px-15 flex flex-col gap-30">
        <div className="flex flex-col gap-5">
          <Condition
            className="text-[22px] font-extended font-bold text-gray-400"
            icon="desktop-empty.svg"
          >
            Количество устройств
          </Condition>

          <div className="flex items-center gap-30">
            <div className="bg-gray-400 p-5 w-[180px] rounded-[5px] flex justify-between items-center">
              <div
                className="bg-gray-300 py-5 px-15 rounded-[5px] text-[28px] font-expanded font-extrabold text-gray-100 select-none cursor-pointer hover:bg-gray-250 transition-all"
                onClick={handleRemoveDevice}
              >
                -
              </div>
              <p className="text-gray-100 text-xl font-expanded font-bold py-5">
                {devicesCount}
              </p>
              <div
                className="bg-f1-light py-5 px-15 rounded-[5px] text-[28px] font-expanded font-extrabold text-gray-400 select-none cursor-pointer hover:bg-[#63ffdc] transition-all"
                onClick={handleAddDevice}
              >
                +
              </div>
            </div>

            <p
              className={`${priceClassName} font-title text-gray-400 md:text-[40px] sm:text-[30px] text-[26px] leading-[44px]`}
            >
              {price}
            </p>
          </div>
        </div>

        <PrimaryButton
          type="dark"
          className="max-sm:hidden"
          onClick={() => showPlanModal(plan, devicesCount)}
        >
          {buttonTitle}
        </PrimaryButton>

        <PrimaryButton
          className="sm:hidden [&>button]:py-10 [&>button]:pl-20 [&>button]:pr-10"
          type="accent"
          onClick={() => showPlanModal(plan, devicesCount)}
        >
          {buttonTitle}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PriceCard;
