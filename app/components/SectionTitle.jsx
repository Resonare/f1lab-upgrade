const SectionTitle = ({
  row,
  col,
  inverseColor = false,
  className = "",
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
      className={`${titleColor} ${row} ${col} sm:pb-100 pb-30 font-bold font-subtitle sm:text-[40px] text-2xl 
      ${className}`}
    >
      {children}
    </p>
  );
};

export default SectionTitle;
