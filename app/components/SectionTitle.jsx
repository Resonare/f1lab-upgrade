const SectionTitle = ({ row = "", col = "", className = "", children }) => {
  return (
    <div className={`${row} ${col} text-gray-400`}>
      <p
        className={`${className} w-[95%] sm:pb-30 sm:font-expanded sm:font-extrabold sm:text-[40px] text-2xl font-extended font-bold sm:leading-[44px] leading-[30px]`}
      >
        {children}
      </p>
    </div>
  );
};

export default SectionTitle;
