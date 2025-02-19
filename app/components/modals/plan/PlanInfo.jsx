import { useContext, useState, useRef } from "react";

import Condition from "../../misc/Condition";
import PlanDevicesCounter from "../../misc/PlanDevicesCounter";
import PlanAnnualSwitch from "../../misc/PlanAnnualSwitch";
import Cancel from "../Cancel";
import SuccessCircle from "../../misc/svg/SuccessCircle";

import { ThemeContext } from "../../../store/theme-context";

const CONDITION_HEIGHT = 37.75;
const SHOW_ALL_CONDITIONS_BUTTON_HEIGHT = 41;

const PlanInfo = ({
  title,
  price,
  annualPrice,
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
  const [annual, setAnnual] = useState(false);

  const countVersion = devicesCount !== undefined;
  const annualVersion = annualPrice !== undefined;

  const { bgColor } = useContext(ThemeContext);

  const [showAllConditions, setShowAllConditions] = useState(false);

  const conditionsContainerHeight = showAllConditions
    ? CONDITION_HEIGHT * conditions?.length + SHOW_ALL_CONDITIONS_BUTTON_HEIGHT
    : `100%`;

  const isVisibleShowAllConditions = () => {
    return conditions?.length > (annualVersion ? 3 : 7);
  };

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

  const getFormattedPrice = (price, devicesCount, name) => {
    return price
      ? `${
          isNaN(price)
            ? price
            : countVersion
            ? (price * (devicesCount || 1))?.toLocaleString(`ru-RU`)
            : price?.toLocaleString(`ru-RU`)
        } ₽`
      : name;
  };

  const handleMonthlyClick = () => {
    if (annual === true) setAnnual(false);
  };

  const handleAnnualClick = () => {
    if (annual === false) setAnnual(true);
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
            <div className={`lg:w-full flex flex-col transition-all gap-[3px]`}>
              <p
                className={`${
                  countVersion
                    ? `sm:text-[28px] text-[22px]`
                    : `sm:text-[40px] text-[22px]`
                } sm:font-expanded font-extended sm:font-extrabold font-bold sm:leading-[44px] leading-[28px]`}
              >
                {title}
              </p>

              <p
                className={`${
                  (!annual || !annualVersion) && `opacity-0 mt-[-26px]`
                } font-extended font-bold text-gray-200 text-[22px] line-through leading-[26px] transition-all`}
              >
                {getFormattedPrice(price, null, name)}
              </p>

              <div
                className={`flex max-sm:flex-col justify-between transition-all`}
              >
                <p className="min-w-[180px] h-fit font-expanded font-extrabold sm:text-[40px] text-[28px] sm:leading-[44px] leading-[28px]">
                  {annual
                    ? getFormattedPrice(annualPrice, null, name)
                    : getFormattedPrice(price, devicesCount, name)}
                </p>
                {annualVersion && (
                  <div
                    className={`${
                      !annual && ` opacity-0`
                    } max-sm:pt-5 flex justify-start sm:gap-15 gap-5 text-f1-dark transition-all`}
                  >
                    <p className="h-fit sm:text-[40px] text-sm font-title sm:leading-[44px]">
                      -15%
                    </p>
                    <p className="h-fit sm:w-1/2 font-text font-light text-base leading-tight">
                      при оплате
                      <br className="max-sm:hidden" /> за 12 месяцев
                    </p>
                  </div>
                )}
              </div>
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

                {/* <p
                  className={`font-title text-gray-400 2xl:text-[40px] xl:text-[34px] text-[40px] leading-[44px]`}
                >
                  {getFormattedPrice(price, deviceCount, name)}
                </p> */}
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

            <div className="grow max-md:h-[150px] relative transition-all duration-500">
              <div
                className={`${bgColor} md:w-[calc(100%+30px*2)] w-[calc(100%+15px*2)] md:translate-x-[-30px] translate-x-[-15px] md:px-30 px-15 lg:absolute overflow-hidden transition-all duration-500`}
                style={{
                  height: conditionsContainerHeight,
                }}
              >
                <div className="absolute z-4 flex flex-col gap-15">
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
                    !isVisibleShowAllConditions() && `hidden`
                  } pt-15 pb-5 w-full bottom-0 absolute flex gap-5 group hover:underline cursor-pointer select-none border-t border-dashed border-gray-200`}
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

            {annualVersion && !success && (
              <PlanAnnualSwitch
                className=""
                submitted={success !== null}
                annual={annual}
                handleAnnualClick={handleAnnualClick}
                handleMonthlyClick={handleMonthlyClick}
              />
            )}
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
