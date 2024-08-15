const ContentCard = ({
  row,
  col,
  bg,
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
        iconPath ? "min-h-[280px] justify-between" : "justify-center"
      } ${row} ${col} ${
        bg ? bg : ""
      } xl:p-30 p-15 mt-[-1px] mx-[1px] border-y border-dashed flex flex-col`}
    >
      {iconPath ? (
        <div>
          <img src={`/images/${iconPath}`} alt="" />
        </div>
      ) : null}
      <div
        className={`${cardTextColorClasses} text-xl font-light font-text leading-relaxed`}
      >
        {children}
      </div>
    </div>
  );
};

export default ContentCard;
