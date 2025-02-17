import { useContext, useState, useRef } from "react";

import Condition from "../../misc/Condition";
import PlanDevicesCounter from "../../misc/PlanDevicesCounter";
import Cancel from "../Cancel";
import SuccessCircle from "../../misc/svg/SuccessCircle";

import { ThemeContext } from "../../../store/theme-context";

const PlanInfo = ({
  title,
  price,
  name,
  max,
  min,
  step,
  mainCondition,
  mainConditionIcon,
  conditions,
  description,
  success,
  devicesCount,
  setDevicesCount,
  closePlanModal,
}) => {
  const countVersion = devicesCount !== undefined;

  const { bgColor } = useContext(ThemeContext);

  const allConditionsWrapperRef = useRef();
  const [showAllConditions, setShowAllConditions] = useState(true);

  const handleShowAllConditions = () => {
    setShowAllConditions((prev) => !prev);
  };

  const handleAddDevice = () => {
    setDevicesCount((prevDevicesCount) =>
      prevDevicesCount + step <= max
        ? prevDevicesCount + step
        : prevDevicesCount
    );
  };

  const handleRemoveDevice = () => {
    if (devicesCount <= min) return;

    setDevicesCount((prevDevicesCount) => prevDevicesCount - step);
  };

  return (
    <div
      className={`${bgColor} z-[1] xl:w-[40%] lg:w-[56%] w-full grow md:p-30 p-15 border-dashed flex flex-col lg:gap-60 gap-30`}
    >
      <SuccessCircle className={`${success !== null && `max-sm:hidden`}`} />

      <Cancel
        className="lg:hidden w-30 h-30 absolute top-15 right-15 cursor-pointer select-none"
        onClick={closePlanModal}
      />

      <div className="h-full flex lg:flex-col md:flex-row flex-col gap-30">
        <div className="flex flex-col gap-30 lg:w-full md:w-1/2">
          <div
            className={`${!countVersion ? `gap-5` : `gap-30`} flex flex-col`}
          >
            <div className={`lg:w-full flex flex-col transition-all`}>
              <p
                className={`${
                  !countVersion
                    ? `sm:text-[28px] text-[22px]`
                    : `sm:text-[40px] text-[22px] sm:w-1/3`
                } sm:font-expanded font-extended sm:font-extrabold font-bold sm:leading-[44px] leading-[28px]`}
              >
                {title}
              </p>

              <p
                className={`${
                  !countVersion
                    ? `sm:text-[40px] text-[28px] md:hidden`
                    : `text-[28px] sm:hidden`
                } font-title text-gray-400 leading-[44px]`}
              >
                {price
                  ? `${
                      isNaN(price)
                        ? price
                        : (price * (devicesCount || 1))?.toLocaleString(`ru-RU`)
                    } ₽`
                  : name}
              </p>
            </div>

            <div
              className={`${
                devicesCount !== undefined ? `gap-15` : `hidden`
              } md:flex sm:hidden max-sm:hidden flex flex-col`}
            >
              <Condition
                className={`${
                  devicesCount === undefined && `hidden`
                } sm:text-[22px] max-sm:w-1/3 text-base sm:font-extended font-expanded font-bold text-gray-400 leading-[18px]`}
                iconClassName={`${devicesCount === undefined && `hidden`}`}
                icon="desktop-empty.svg"
              >
                Количество устройств
                <span className={`${success === null && `hidden`}`}>
                  : {devicesCount}
                </span>
              </Condition>

              <div className="flex items-center gap-30">
                <PlanDevicesCounter
                  className={`${success !== null && `hidden`} ${
                    devicesCount === undefined && `hidden`
                  } sm:min-w-[180px] max-sm:w-full`}
                  buttonsClassName="px-15"
                  onAddDevice={handleAddDevice}
                  onRemoveDevice={handleRemoveDevice}
                  devicesCount={devicesCount}
                />

                <p
                  className={`font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
                >
                  {price
                    ? `${
                        isNaN(price)
                          ? price
                          : (price * (devicesCount || 1))?.toLocaleString(
                              `ru-RU`
                            )
                      } ₽`
                    : name}
                </p>
              </div>
            </div>
          </div>
          <div className={`${!description && `hidden`} max-sm:hidden`}>
            <p className="text-gray-300 text-base">{description}</p>
          </div>
        </div>

        <div className="grow lg:w-full md:w-1/2 flex flex-col gap-15">
          <div className="grow flex flex-col sm:gap-30 gap-15">
            <Condition
              className="text-base font-bold font-expanded leading-[18px]"
              icon={mainConditionIcon}
            >
              {mainCondition}
            </Condition>

            <div
              className="grow max-md:h-[150px] relative transition-all duration-500"
              style={{
                height:
                  !showAllConditions &&
                  window.matchMedia("(max-width: 1300px)").matches
                    ? allConditionsWrapperRef?.current?.offsetHeight + 40
                    : 150,
              }}
            >
              <div
                className={`${bgColor} md:w-[calc(100%+30px*2)] w-[calc(100%+15px*2)] md:translate-x-[-30px] translate-x-[-15px] md:px-30 px-15 lg:absolute overflow-hidden transition-all duration-500`}
                style={{
                  height: !showAllConditions
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
                        condition.enabled || condition.enabled === undefined
                          ? "add-circle-icon.svg"
                          : "add-circle-disabled-icon.svg"
                      }
                      // icon={"add-circle-icon.svg"}
                    >
                      {condition.enabled === undefined
                        ? condition
                        : condition.title}
                    </Condition>
                  ))}
                </div>

                <div
                  className={`${bgColor} ${
                    allConditionsWrapperRef?.current?.offsetHeight < 180 &&
                    `hidden`
                  } pt-15 pb-5 w-full bottom-0 absolute flex gap-5 group hover:underline cursor-pointer select-none border-t border-dashed border-gray-200`}
                  onClick={handleShowAllConditions}
                >
                  <p className="text-sm font-expanded font-bold">
                    Показать все опции
                  </p>

                  <div
                    className={`${
                      !showAllConditions && `rotate-180`
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

        <div
          className={`${
            !countVersion
              ? `hidden`
              : `${
                  success !== null && `flex-col`
                } md:hidden sm:flex gap-15 hidden`
          } justify-between`}
        >
          <p
            className={`font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
          >
            {(price * (devicesCount || 1))?.toLocaleString("ru-RU")} ₽
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
