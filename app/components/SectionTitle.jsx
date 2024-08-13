const SectionTitle = ({
  row,
  col,
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
      className={`${titleColor} ${row} ${col} pb-100 font-bold text-[40px] font-subtitle`}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
