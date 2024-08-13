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
      } xl:p-30 lg:p-15 md:p-15 sm:p-15 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed gap-[10px] flex flex-col justify-between gap-10`}
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
