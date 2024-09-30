const SectionTitle = ({ row, col, className = "", children }) => {
  return (
    <div className={`${row} ${col} text-gray-400`}>
      <p
        className={`${className} sm:pb-30 font-bold font-title sm:text-[40px] text-2xl`}
      >
        {children}
      </p>
    </div>
  );
};

export default SectionTitle;
