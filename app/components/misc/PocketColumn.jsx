const PocketColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5 w-[160px]">
      <div className="text-sm font-bold font-text uppercase leading-[18px] tracking-wide">
        {title}
      </div>
      <div className="text-sm font-normal font-text leading-tight">
        {children}
      </div>
    </div>
  );
};

export default PocketColumn;
