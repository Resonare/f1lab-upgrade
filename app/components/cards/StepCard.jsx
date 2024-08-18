const StepCard = ({
  row,
  col,
  title,
  tags,
  upperLabels,
  children,
}) => {
  return (
    <div
      className={`${row} ${col} xl:p-30 p-15 mt-[-1px] mx-[1px] border-y border-dashed gap-60 flex flex-col`}
    >
      <div className="flex flex-wrap gap-[2px]">
        {upperLabels.map((label, index) => (
          <div
            key={index}
            className="bg-f1-light rounded-[15px] xl:px-15 px-10 py-5"
          >
            <p className="uppercase text-gray-400 xl:text-sm text-xs font-bold font-text">
              {label}
            </p>
          </div>
        ))}
      </div>
      <div className="gap-30 flex flex-col">
        <p className="text-zinc-800 text-[26px] font-bold font-subtitle leading-[30px]">
          {title}
        </p>
        <p className=" md:text-[1.2rem] sm:text-[1.5rem] text-[1.1rem] text-xl text-gray-300 font-light font-text leading-relaxed">
          {children}
        </p>

        <div className="flex flex-wrap gap-5">{tags}</div>
      </div>
    </div>
  );
};

export default StepCard;
