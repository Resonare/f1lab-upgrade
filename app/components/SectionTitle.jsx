const SectionTitle = ({
  row,
  col,
  width = 1,
  height = 1,
  inverseColor = false,
  children,
}) => {
  //Computing title color depending on color inversion flag
  let titleColor = "";
  if (inverseColor) {
    titleColor = "text-f1-light";
  } else {
    titleColor = "text-gray-400";
  }

  return (
    <p
      className={`${titleColor} font-bold text-[40px] font-subtitle`}
      style={{
        "grid-column": `${col} / ${col + width}`,
        "grid-row": `${row} / ${row + height}`,
      }}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
