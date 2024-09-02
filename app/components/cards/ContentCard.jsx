const ContentCard = ({
  row,
  col,
  bg,
  iconPath,
  inverseColor = false,
  transparentOnMobile = false,
  children,
}) => {
  //Computing card color depending on color inversion flag
  const cardColorClasses =
    inverseColor && !transparentOnMobile ? "border-y-gray-300" : "";
  const cardTextColorClasses = inverseColor ? "text-gray-100" : "text-gray-400";

  return (
    <div
      className={`${cardColorClasses} ${row} ${col} ${bg ? bg : ""} ${
        transparentOnMobile ? "max-sm:bg-[transparent]" : "border-y"
      } ${
        iconPath ? "min-h-[280px] justify-between" : "justify-center"
      } sm:border-y xl:p-30 sm:p-15 p-0 max-sm:pb-15 mt-[-1px] mx-[1.2px] border-dashed flex flex-col`}
    >
      {iconPath ? (
        <div>
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <div
        className={`${cardTextColorClasses} sm:text-xl text-[16px] font-light font-text sm:leading-relaxed leading-tight`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
