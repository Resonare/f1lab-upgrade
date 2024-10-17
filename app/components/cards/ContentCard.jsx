const ContentCard = ({
  row,
  col,
  bg,
  iconPath,
  inverseColor = false,
  className = "",
  children,
}) => {
  // const mobileTransparency = transparentOnMobile
  //   ? "max-sm:bg-[transparent]"
  //   : inverseColor
  //   ? "max-sm:bg-gray-400"
  //   : `max-sm:${bgColor}`;

  // const mobileBorder = borderLeft
  //   ? "max-sm:border-l max-sm:ml-[-1px] mr-[1px]"
  //   : borderRight
  //   ? "max-sm:border-r max-sm:mr-[-1px] ml-[1px]"
  //   : "";

  return (
    <div
      className={`${row} ${col} ${bg ? bg : ``} ${
        inverseColor && `border-gray-300 max-sm:bg-gray-400`
      } ${
        iconPath ? `sm:min-h-[280px] sm:justify-between` : `justify-center`
      } xl:p-30 sm:p-15 p-0 max-sm:p-10 mt-[-1px] sm:mx-[1.2px] border-dashed flex flex-col ${className}`}
    >
      {iconPath ? (
        <div className="max-sm:hidden">
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <div
        className={`${
          inverseColor ? `text-gray-100` : `text-gray-400`
        } sm:text-xl text-[16px] sm:font-light font-text sm:leading-relaxed leading-tight`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
