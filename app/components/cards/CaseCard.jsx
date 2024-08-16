import { useContext } from "react";

import ArrowURSecondary from "../misc/ArrowURSecondary";

import { ThemeContext } from "../../store/theme-context";

const CaseCard = ({ row, col, tags, logoPath, className, children }) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div className={`${row} ${col} bg-gray-400`}>
      <div
        className={`${bgColor} ${className} h-full border-dashed rounded-xl cursor-pointer`}
      >
        <div className="group hover:bg-striped h-full xl:p-30 p-15 gap-60 hover:gap-40 hover:xl:pb-60 hover:pb-[45px] flex flex-col transition-all duration-300">
          <div className="flex justify-between">
            <img src={`/images/logo/${logoPath}`} alt="" />
            <ArrowURSecondary className="px-0 opacity-0 group-hover:p-0 group-hover:opacity-100" />
          </div>
          <div className="gap-15 group-hover:gap-5 flex flex-col transition-all duration-300">
            <p className="text-xl text-gray-400 font-light font-text leading-relaxed">
              {children}
            </p>

            <div className="flex flex-col gap-5">
              <p className="font-text font-normal text-sm leading-tight">
                Услуги в кейсе
              </p>
              <div className="flex flex-wrap gap-5">{tags}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
