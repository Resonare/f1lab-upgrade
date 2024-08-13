const ContentCard = ({
  row,
  col,
  width = 1,
  height = 1,
  iconPath,
  inverseColor = false,
  children,
}) => {
  //Computing card color depending on color inversion flag
  let cardColorClasses = "";
  let cardTextColorClasses = "";
  if (inverseColor) {
    cardColorClasses = "border-t-gray-300 border-b-gray-300";
    cardTextColorClasses = "text-gray-100";
  } else {
    cardColorClasses = "border-t-grey border-b-grey";
    cardTextColorClasses = "text-gray-400";
  }

  return (
    <div
      className={`${cardColorClasses} ${
        iconPath ? "min-h-[280px]" : ""
      } p-15 xl:p-30 border-y border-dashed -mt-[0.8px]`}
      style={{
        gridColumn: `${col} / ${col + width}`,
        gridRow: `${row} / ${row + height}`,
      }}
    >
      {iconPath ? (
        <div className="w-20 h-20 relative">
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <span
        className={`${cardTextColorClasses} text-base lg:text-xl font-text font-light leading-relaxed `}
      >
        {children}
      </span>
    </div>
  );
};

export default ContentCard;
