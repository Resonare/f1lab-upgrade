import { useContext, useState, useRef } from "react";

import Condition from "../../misc/Condition";
import PlanDevicesCounter from "../../misc/PlanDevicesCounter";
import Cancel from "../Cancel";
import SuccessCircle from "../../misc/svg/SuccessCircle";

import { ThemeContext } from "../../../store/theme-context";

const PlanInfo = ({
  title,
  price,
  termCondition,
  conditions,
  success,
  devicesCount,
  setDevicesCount,
  closePlanModal,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const allConditionsWrapperRef = useRef();
  const [showAllConditions, setShowAllConditions] = useState(false);

  const handleShowAllConditions = () => {
    setShowAllConditions((prev) => !prev);
  };

  const handleAddDevice = () => {
    setDevicesCount((prevDevicesCount) => prevDevicesCount + 1);
  };

  const handleRemoveDevice = () => {
    if (devicesCount < 1) return;

    setDevicesCount((prevDevicesCount) => prevDevicesCount - 1);
  };

  return (
    <div
      className={`${bgColor} z-[1] xl:w-[40%] lg:w-[56%] w-full grow md:p-30 p-15 border-dashed flex flex-col sm:gap-60 gap-30`}
    >
      <div>
        <div className={`${success !== null && `max-sm:hidden`}`}>
          <SuccessCircle />
        </div>

        <Cancel
          className="lg:hidden w-30 h-30 absolute top-15 right-15 cursor-pointer select-none"
          onClick={closePlanModal}
        />
      </div>

      <div className="h-full flex lg:flex-col md:flex-row flex-col gap-30">
        <div className="flex flex-col gap-30 lg:w-full sm:w-1/2">
          <div className="lg:w-full md:w-1/2 flex flex-col transition-all">
            <p className="sm:w-1/3 sm:font-expanded font-extended sm:font-extrabold font-bold sm:text-[40px] text-[22px] sm:leading-[44px] leading-[28px]">
              {title}
            </p>

            <p
              className={`sm:hidden font-title text-gray-400 text-[28px] leading-[44px]`}
            >
              {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
            </p>
          </div>

          <div className="md:flex sm:hidden flex flex-col gap-15">
            <Condition
              className="sm:text-[22px] max-sm:w-1/3 text-base sm:font-extended font-expanded font-bold text-gray-400 leading-[18px]"
              icon="desktop-empty.svg"
            >
              Количество устройств
              <span className={`${success === null && `hidden`}`}>
                : {devicesCount}
              </span>
            </Condition>

            <div className="flex items-center gap-30">
              <PlanDevicesCounter
                className={`${
                  success !== null && `hidden`
                } sm:min-w-[180px] w-full`}
                buttonsClassName="px-15"
                onAddDevice={handleAddDevice}
                onRemoveDevice={handleRemoveDevice}
                devicesCount={devicesCount}
              />

              <p
                className={`max-sm:hidden font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
              >
                {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
              </p>
            </div>
          </div>
        </div>

        <div className="grow lg:w-full md:w-1/2 flex flex-col gap-15">
          <div className="grow flex flex-col sm:gap-30 gap-15">
            <Condition
              className="w-1/2 text-base font-bold font-expanded leading-[18px]"
              icon="list-locked.svg"
            >
              {termCondition}
            </Condition>

            <div
              className="grow max-md:h-[150px] relative transition-all duration-500"
              style={{
                height:
                  showAllConditions &&
                  window.matchMedia("(max-width: 1300px)").matches
                    ? allConditionsWrapperRef?.current?.offsetHeight + 40
                    : 150,
              }}
            >
              <div
                className={`${bgColor} md:w-[calc(100%+30px*2)] w-[calc(100%+15px*2)] md:translate-x-[-30px] translate-x-[-15px] px-30 lg:absolute overflow-hidden transition-all duration-500`}
                style={{
                  height: showAllConditions
                    ? allConditionsWrapperRef?.current?.offsetHeight +
                      (window.matchMedia("(max-width: 1300px)").matches
                        ? 40
                        : 15)
                    : `100%`,
                }}
              >
                <div
                  className="absolute z-4 flex flex-col gap-15"
                  ref={allConditionsWrapperRef}
                >
                  {conditions?.map((condition, index) => (
                    <Condition
                      key={index}
                      className="text-sm font-normal font-text leading-relaxed"
                      icon={
                        condition.enabled
                          ? "add-circle-icon.svg"
                          : "add-circle-disabled-icon.svg"
                      }
                    >
                      {condition.title}
                    </Condition>
                  ))}
                </div>

                <div
                  className={`${bgColor} pt-15 pb-5 w-full bottom-0 absolute flex gap-5 group hover:underline cursor-pointer select-none border-t border-dashed border-gray-200`}
                  onClick={handleShowAllConditions}
                >
                  <p className="text-sm font-expanded font-bold">
                    Показать все опции
                  </p>

                  <div
                    className={`${
                      showAllConditions && `rotate-180`
                    } flex items-center transition-all`}
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.29492 6L8.29574 10.58L13.2949 6"
                        stroke="#22282E"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden sm:flex hidden justify-between">
          <p
            className={`font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
          >
            {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
          </p>

          <div className="flex flex-col gap-15">
            <Condition
              className="sm:text-[22px] text-base font-extended font-bold text-gray-400"
              icon="desktop-empty.svg"
            >
              Количество устройств
              <span className={`${success === null && `hidden`}`}>
                : {devicesCount}
              </span>
            </Condition>

            <div className="flex items-center gap-30">
              <PlanDevicesCounter
                className={`${success !== null && `hidden`} w-full`}
                buttonsClassName="px-30"
                onAddDevice={handleAddDevice}
                onRemoveDevice={handleRemoveDevice}
                devicesCount={devicesCount}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanInfo;
