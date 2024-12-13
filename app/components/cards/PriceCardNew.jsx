import { useContext, useState } from "react";

import useModalStore from "../../store/modal";

import PrimaryButton from "../buttons/PrimaryButton";
import Condition from "../misc/Condition";
import PlanDevicesCounter from "../misc/PlanDevicesCounter";

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
          className={`${bgColor} ml-[1px] xl:px-30 px-15 sticky top-[1svh] flex flex-col gap-15 sm:pt-100`}
        >
          <div className="sm:border-b border-dashed border-gray-200">
            <p className="w-1/3 sm:font-extrabold font-bold sm:font-expanded font-extended pb-15 text-gray-400 sm:text-[40px] text-2xl sm:leading-[44px] leading-[30px]">
              {title}
            </p>
          </div>
        </div>

        <div className="xl:px-30 px-15 flex flex-col sm:gap-30 gap-15">
          <Condition
            className="sm:text-[22px] text-base sm:font-extended font-expanded font-bold text-gray-400 max-sm:leading-[18px]"
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
        <div className="flex justify-between">
          <p
            className={`${priceClassName} lg:hidden max-sm:hidden font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
          >
            {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
          </p>

          <div className="flex flex-col gap-5">
            <Condition
              className="sm:text-[22px] text-base font-extended font-bold text-gray-400"
              icon="desktop-empty.svg"
            >
              Количество устройств
            </Condition>

            <div className="flex xl:flex-row flex-col xl:items-center gap-30">
              <PlanDevicesCounter
                buttonsClassName="lg:px-15 px-30"
                onAddDevice={handleAddDevice}
                onRemoveDevice={handleRemoveDevice}
                devicesCount={devicesCount}
              />

              <p
                className={`${priceClassName} lg:block sm:hidden font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
              >
                {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
              </p>
            </div>
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
          className="sm:hidden"
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
