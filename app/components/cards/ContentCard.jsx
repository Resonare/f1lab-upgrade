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
  const cardColorClasses = inverseColor
    ? "border-t-gray-300 border-b-gray-300"
    : "border-t-grey border-b-grey";
  const cardTextColorClasses = inverseColor ? "text-gray-100" : "text-gray-400";

  return (
    <div
      className={`${cardColorClasses} ${
        iconPath ? "min-h-[280px]" : ""
      } p-15 xl:p-20 border-y border-dashed -mt-[0.8px]`}
      style={{
        gridColumn: `${col} / ${col + width}`,
        gridRow: `${row} / ${row + height}`,
      }}
    >
      {iconPath ? (
        <div>
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <p
        className={`${cardTextColorClasses} text-xl font-light font-text leading-relaxed`}
      >
        {children}
      </p>
    </div>
  );
};

export default ContentCard;
