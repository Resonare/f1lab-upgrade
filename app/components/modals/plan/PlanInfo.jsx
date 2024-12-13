import { useContext, useState, useRef } from "react";

import Condition from "../../misc/Condition";
import PlanDevicesCounter from "../../misc/PlanDevicesCounter";

import { ThemeContext } from "../../../store/theme-context";

const PlanInfo = ({
  title,
  price,
  termCondition,
  conditions,
  success,
  devicesCount = 5,
  setDevicesCount,
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

  const successCircleBig = (
    <svg
      className="max-lg:hidden"
      width="102"
      height="102"
      viewBox="0 0 102 102"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math">
        <path
          id="Vector"
          d="M51 101C78.6146 101 101 78.6146 101 51C101 23.3858 78.6146 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6146 23.3858 101 51 101Z"
          stroke="#01CA9A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          id="Vector_2"
          d="M70.1952 36.1895L43.8704 69.0954L30.708 59.2236"
          stroke="#01CA9A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );

  const successCircleSmall = (
    <svg
      className="lg:hidden"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_3709_13369)">
        <path
          d="M24.8437 49.375C38.2196 49.375 49.0625 38.5321 49.0625 25.1562C49.0625 11.7806 38.2196 0.9375 24.8437 0.9375C11.4681 0.9375 0.625 11.7806 0.625 25.1562C0.625 38.5321 11.4681 49.375 24.8437 49.375Z"
          stroke="#01CA9A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.1422 17.9844L21.3912 33.9232L15.0156 29.1416"
          stroke="#01CA9A"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3709_13369">
          <rect width="50" height="50" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <div
      className={`${bgColor} xl:w-[40%] lg:w-[56%] w-full grow md:p-30 p-15 border-dashed flex flex-col gap-60`}
      style={{
        height: showAllConditions
          ? allConditionsWrapperRef?.current?.offsetHeight +
            30 +
            50 +
            60 +
            30 +
            36 +
            20
          : `auto`,
      }}
    >
      <div className={`${success !== null && `max-sm:hidden`}`}>
        {successCircleBig}

        {successCircleSmall}
      </div>

      <div className="h-full flex lg:flex-col gap-30">
        <div className="flex flex-col gap-30">
          <div className="lg:w-full md:w-1/2 flex flex-col gap-30 transition-all">
            <p className="w-1/3 sm:font-expanded font-extended sm:font-extrabold font-bold sm:text-[40px] text-[22px] sm:leading-[44px] leading-[28px]">
              {title}
            </p>
          </div>

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
                className={`${success !== null && `hidden`} min-w-[180px]`}
                buttonsClassName="px-15"
                onAddDevice={handleAddDevice}
                onRemoveDevice={handleRemoveDevice}
                devicesCount={devicesCount}
              />

              <p
                className={`font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
              >
                {(price * devicesCount)?.toLocaleString("ru-RU")} ₽
              </p>
            </div>
          </div>
        </div>

        <div className="grow lg:w-full md:w-1/2 flex flex-col gap-15">
          <div className="grow flex flex-col sm:gap-30 gap-15">
            <Condition
              className="w-1/3 text-base font-bold font-expanded leading-[18px]"
              icon="list-locked.svg"
            >
              {termCondition}
            </Condition>

            <div className="grow relative">
              <div
                className={`${bgColor} md:w-[calc(100%+30px*2)] w-[calc(100%+15px*2)] md:translate-x-[-30px] translate-x-[-15px] px-30 lg:absolute overflow-hidden transition-all duration-500`}
                style={{
                  height: showAllConditions
                    ? allConditionsWrapperRef?.current?.offsetHeight + 15
                    : `100%`,
                }}
              >
                <div
                  className="absolute flex flex-col gap-15"
                  ref={allConditionsWrapperRef}
                >
                  {conditions?.map((condition, index) => (
                    <Condition
                      key={index}
                      className="text-sm font-normal font-text leading-relaxed"
                      icon="add-circle-icon.svg"
                    >
                      {condition}
                    </Condition>
                  ))}
                  {conditions?.map((condition, index) => (
                    <Condition
                      key={index}
                      className="text-sm font-normal font-text leading-relaxed"
                      icon="add-circle-icon.svg"
                    >
                      {condition}
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
      </div>
    </div>
  );
};

export default PlanInfo;
