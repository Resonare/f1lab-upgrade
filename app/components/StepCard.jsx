import { useContext } from "react";

import { GlobalContext } from "../contexts/GlobalContext";

const StepCard = ({
  row,
  col,
  width = 1,
  height = 1,
  title,
  tags,
  upperLabels,
  children,
}) => {
  const { screen } = useContext(GlobalContext);

  //Computing screen flags for shorter syntax
  const screenMd = screen == "md";
  const screenSm = screen == "sm";

  return (
    <div
      className="xl:p-30 lg:p-15 md:p-15 sm:p-15 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed gap-60 flex flex-col"
      style={{
        gridColumn: `${col} / ${col + width}`,
        gridRow: `${row} / ${row + height}`,
      }}
    >
      <div className="flex gap-[2px]">
        {upperLabels.map((label) => (
          <div className="bg-f1-light rounded-[15px] px-15 py-5">
            <p className="uppercase text-gray-400 text-sm font-bold font-text">{label}</p>
          </div>
        ))}
      </div>
      <div className="gap-30 flex flex-col">
        <p className="text-zinc-800 text-[26px] font-bold font-subtitle leading-[30px]">
          {title}
        </p>
        <p
          className={`${
            screenMd
              ? "text-[1.2rem]"
              : screenSm
              ? "text-[1.5rem]"
              : "text-[1.1rem]"
          } text-xl text-gray-300 font-light font-text leading-relaxed`}
        >
          {children}
        </p>

        <div className="flex gap-5">{tags}</div>
      </div>
    </div>
  );
};

export default StepCard;
