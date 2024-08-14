import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const CaseCard = ({ row, col, tags, logoPath, children }) => {
  const { bgColor } = useContext(ThemeContext);

  return (
    <div className={`${row} ${col} bg-gray-400`}>
      <div
        className={`${bgColor} h-full border-y-[1px] border-l-[1px] border-dashed rounded-xl xl:p-30 lg:p-15 md:p-15 sm:p-15 gap-60 flex flex-col`}
      >
        <div>
          <img src={`/images/logo/${logoPath}`} alt="" />
        </div>
        <div className="gap-15 flex flex-col">
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
  );
};

export default CaseCard;
