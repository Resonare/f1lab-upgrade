import { useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

const ContentCard = ({
  row,
  col,
  bg,
  iconPath,
  inverseColor = false,
  transparentOnMobile = false,
  borderLeft = false,
  borderRight = false,
  className = "",
  children,
}) => {
  const { bgColor } = useContext(ThemeContext);

  //Computing card color depending on color inversion flag
  const cardColorClasses =
    inverseColor && !transparentOnMobile ? "border-y border-gray-300" : "";
  const cardTextColorClasses = inverseColor ? "text-gray-100" : "text-gray-400";

  const mobileTransparency = transparentOnMobile
    ? "max-sm:bg-[transparent]"
    : inverseColor
    ? "border-y max-sm:bg-gray-400"
    : `border-y max-sm:${bgColor}`;

  const mobileBorder = borderLeft
    ? "max-sm:border-l max-sm:ml-[-1px] mr-[1px]"
    : borderRight
    ? "max-sm:border-r max-sm:mr-[-1px] ml-[1px]"
    : "";

  return (
    <div
      className={`${cardColorClasses} ${row} ${col} ${mobileTransparency} ${mobileBorder} ${
        bg ? bg : ""
      }  ${
        iconPath ? "sm:min-h-[280px] sm:justify-between" : "justify-center"
      } sm:border-y xl:p-30 sm:p-15 p-0 max-sm:p-10 mt-[-1px] sm:mx-[1.2px] border-dashed flex flex-col ${className}`}
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
