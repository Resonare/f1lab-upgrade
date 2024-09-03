import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const ContentCard = ({
  row,
  col,
  bg,
  iconPath,
  inverseColor = false,
  transparentOnMobile = true,
  className = "",
  children,
}) => {
  //Computing card color depending on color inversion flag
  const cardColorClasses =
    inverseColor && !transparentOnMobile ? "border-y-gray-300" : "";
  const cardTextColorClasses = inverseColor ? "text-gray-100" : "text-gray-400";

  const { bgColor } = useContext(ThemeContext);

  return (
    <div
      className={`${cardColorClasses} ${row} ${col} ${bg ? bg : ""} ${
        transparentOnMobile
          ? "max-sm:bg-[transparent]"
          : `border-y max-sm:${bgColor}`
      } ${
        iconPath ? "sm:min-h-[280px] sm:justify-between" : "justify-center"
      } sm:border-y xl:p-30 sm:p-15 p-0 max-sm:p-10 mt-[-1px] sm:mx-[1.2px] border-dashed flex flex-col 
      ${className}`}
    >
      {iconPath ? (
        <div className="max-sm:hidden">
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <div
        className={`${cardTextColorClasses} sm:text-xl text-[16px] sm:font-light font-text sm:leading-relaxed leading-tight`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
