import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const StepCard = ({
  row = "",
  col = "",
  title = "",
  tags = [],
  upperLabels = [],
  inverseColor = false,
  className = "",
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${className} ${row} ${col} max-sm:${bgColor} ${
        inverseColor ? "bg-gray-400 max-sm:bg-gray-400" : ""
      } ${
        upperLabels.length == 0 ? "" : "gap-15"
      } lg:gap-60 sm:gap-30 xl:p-30 p-15 mt-[-1px] sm:mx-[1px] border-y border-dashed flex flex-col w-fit`}
    >
      <div className="flex flex-wrap gap-[2px]">
        {upperLabels.map((label, index) => (
          <div
            key={index}
            className={`${
              index == 0 ? `bg-gray-400` : `bg-f1-light`
            } rounded-[15px] xl:px-15 px-10 py-5`}
          >
            <p
              className={`${
                index == 0 ? `text-f1-light` : `text-gray-400`
              } uppercase text-sm font-bold font-text`}
            >
              {label}
            </p>
          </div>
        ))}
      </div>
      <div
        className={`${tags.length == 0 ? "" : "lg:gap-30 gap-15"} flex flex-col w-fit`}
      >
        <p
          className={`${
            inverseColor ? "text-f1-light" : ""
          } xl:text-[26px] lg:text-[22px] md:text-[26px] sm:text-[22px] text-xl font-bold font-extended sm:leading-[30px] leading-[24px] w-fit`}
        >
          {title}
        </p>
        <div
          className={`${
            tags.length == 0 ? "mt-30" : ""
          } sm:text-xl text-[1rem] text-gray-300 font-light font-text`}
        >
          {children}
        </div>

        <div className="flex flex-wrap gap-5">{tags}</div>
      </div>
    </div>
  );
};

export default StepCard;
