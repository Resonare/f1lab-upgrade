import { useContext } from "react";

import Condition from "../../misc/Condition";
import PlanAnnualSwitch from "./PlanAnnualSwitch";

import { ThemeContext } from "../../../store/theme-context";

const PlanInfo = ({
  title,
  price,
  annualPrice,
  mainConditions,
  mainConditionIcons,
  conditions,
  annual,
  setAnnual,
  opened,
  success,
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  const handleMonthlyClick = () => {
    setAnnual(false);
    console.log("test");
  };

  const handleAnnualClick = () => {
    setAnnual(true);
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
      className={`${bgColor} xl:w-[40%] lg:w-[56%] w-full grow md:p-30 p-15 border-dashed flex flex-col gap-30 justify-between`}
    >
      <div className={`${success !== null && `max-sm:hidden`}`}>
        {successCircleBig}

        {successCircleSmall}
      </div>
      <div className="flex lg:flex-col max-md:flex-col gap-30">
        <div className="lg:w-full md:w-1/2 flex flex-col gap-30 transition-all">
          <div className="flex flex-col gap-5">
            <p className="sm:font-expanded font-extended sm:font-extrabold font-bold sm:text-[28px] text-[22px] sm:leading-[44px] leading-[28px]">
              {title}
            </p>
            <p
              className={`${
                !annual && `opacity-0 mt-[-26px]`
              } font-extended font-bold text-gray-200 text-[22px] line-through leading-[26px] transition-all`}
            >
              {price}
            </p>

            <div
              className={`flex max-sm:flex-col justify-between transition-all`}
            >
              <p className="min-w-[180px] h-fit font-expanded font-extrabold sm:text-[40px] text-[28px] sm:leading-[44px] leading-[28px]">
                {annual ? annualPrice : price}
              </p>
              {annualPrice && (
                <div
                  className={`${
                    !annual && ` opacity-0`
                  } max-sm:pt-5 flex justify-start sm:gap-15 gap-5 text-f1-dark transition-all`}
                >
                  <p className="h-fit sm:text-[40px] text-sm font-title sm:leading-[44px]">
                    -15%
                  </p>
                  <p className="h-fit sm:w-1/2 font-text font-light text-base leading-tight">
                    при оплате за 12 месяцев
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="max-sm:hidden text-gray-300 text-base font-text font-light leading-tight">
            {children}
          </div>

          {annualPrice && !success && (
            <PlanAnnualSwitch
              className="lg:hidden md:flex hidden"
              submitted={success !== null}
              annual={annual}
              handleAnnualClick={handleAnnualClick}
              handleMonthlyClick={handleMonthlyClick}
            />
          )}
        </div>

        {opened && (
          <div className="lg:w-full md:w-1/2 flex flex-col sm:gap-30 gap-15">
            <div className="flex flex-col sm:gap-10 gap-5">
              {mainConditions.map((condition, index) => (
                <Condition
                  key={index}
                  className="text-gray-400 text-[22px] font-extended font-bold leading-relaxed"
                  icon={mainConditionIcons[index]}
                  iconClassName="w-30"
                >
                  {condition}
                </Condition>
              ))}
            </div>
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

      <PlanAnnualSwitch
        className={`${(!annualPrice || success) && `hidden`} lg:flex md:hidden`}
        submitted={success !== null}
        annual={annual}
        handleAnnualClick={handleAnnualClick}
        handleMonthlyClick={handleMonthlyClick}
      />
    </div>
  );
};

export default PlanInfo;
