const SectionTitle = ({ row = "", col = "", className = "", children }) => {
  return (
    <div className={`${row} ${col} text-gray-400`}>
      <p
        className={`${className} sm:pb-30 font-expanded font-extrabold sm:text-[40px] text-2xl sm:leading-[60px] leading-8`}
      >
        {children}
      </p>
    </div>
  );
};

export default SectionTitle;
