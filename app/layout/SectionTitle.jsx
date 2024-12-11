const SectionTitle = ({
  row = "",
  col = "",
  className = "",
  children,
}) => {
  return (
    <div
      className={`${row} ${col} text-gray-400 sm:text-[40px] text-2xl sm:font-expanded sm:font-extrabold font-extended font-bold`}
    >
      <p className={`${className} w-[95%] sm:pb-30 sm:leading-[44px] leading-[25px]`}>{children}</p>
    </div>
  );
};

export default SectionTitle;
