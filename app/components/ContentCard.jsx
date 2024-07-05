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
      className={`${cardColorClasses} p-30 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed gap-[10px] min-h-[280px] flex flex-col justify-between`}
      style={{
        "grid-column": `${col} / ${col + width}`,
        "grid-row": `${row} / ${row + height}`,
      }}
    >
      <div className="w-20 h-20 relative">
        <img src={`/images/${iconPath}`} alt="" />
      </div>
      <p
        className={`${cardTextColorClasses} text-[1.1rem] font-light font-text leading-relaxed`}
      >
        {children}
      </p>
    </div>
  );
};

export default ContentCard;
