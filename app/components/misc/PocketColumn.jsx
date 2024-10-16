const PocketColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 sm:w-[160px] w-[140px]">
      <div className="text-sm font-bold font-text uppercase leading-[18px] tracking-wide">
        {title}
      </div>
      <div className="text-sm font-light font-text leading-tight">
        {children}
      </div>
    </div>
  );
};

export default PocketColumn;
