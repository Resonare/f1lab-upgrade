const PlanAnnualSwitch = ({
  submitted,
  annual,
  handleAnnualClick,
  handleMonthlyClick,
  className = "",
}) => {
  return (
    <div
      className={`${className} bg-gray-400 w-fit p-5 sm:rounded-[10px] rounded-[15px] gap-5 flex select-none`}
    >
      <div
        className={`${submitted && annual && `hidden`} ${
          !annual
            ? `bg-f1-light text-gray-400`
            : `bg-gray-300 hover:bg-gray-200 text-gray-100`
        } lg:h-60 h-[45px] cursor-pointer flex items-center p-15 sm:rounded-[5px] rounded-[10px] transition-all`}
        onClick={handleMonthlyClick}
      >
        <p className="h-fit lg:text-base md:text-[13px] text-sm font-title leading-[18px]">
          Ежемесячно
        </p>
      </div>
      <div
        className={`${submitted && !annual && `hidden`} ${
          annual
            ? `bg-f1-light text-gray-400`
            : `bg-gray-300 hover:bg-gray-200 text-gray-100`
        } lg:h-60 h-[45px] cursor-pointer flex gap-15 items-center pl-15 pr-5 py-5 sm:rounded-[5px] rounded-[10px] transition-all`}
        onClick={handleAnnualClick}
      >
        <p className="h-fit lg:text-base md:text-[13px] text-sm font-subtitle leading-[18px]">
          За год
        </p>
        <div className="bg-gray-100 lg:p-15 sm:px-15 px-10 py-5 sm:rounded-sm rounded-[4px] h-full flex items-center">
          <p className="text-gray-400 lg:text-base md:text-[13px] text-sm font-title leading-[18px]">
            <span className="max-sm:hidden">Экономия 15%</span>
            <span className="sm:hidden">-15%</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanAnnualSwitch;
