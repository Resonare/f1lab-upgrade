const PlanAnnualSwitch = ({
  submitted,
  annual,
  handleAnnualClick,
  handleMonthlyClick,
  className = "",
}) => {
  return (
    <div
      className={`${className} bg-gray-400 w-fit p-5 rounded-[10px] gap-5 flex select-none`}
    >
      <div
        className={`${submitted && annual && `hidden`} ${
          !annual
            ? `bg-f1-light text-gray-400`
            : `bg-gray-300 hover:bg-gray-200 text-gray-100`
        } lg:h-60 h-[45px] cursor-pointer flex items-center p-15 rounded-[5px] transition-all`}
        onClick={handleMonthlyClick}
      >
        <p className="h-fit lg:text-base text-sm font-title leading-[18px]">
          Ежемесячно
        </p>
      </div>
      <div
        className={`${submitted && !annual && `hidden`} ${
          annual
            ? `bg-f1-light text-gray-400`
            : `bg-gray-300 hover:bg-gray-200 text-gray-100`
        } lg:h-60 h-[45px] cursor-pointer flex gap-15 items-center px-15 py-5 rounded-[5px] transition-all`}
        onClick={handleAnnualClick}
      >
        <p className="h-fit text-base font-subtitle leading-[18px]">За год</p>
        <div className="bg-gray-100 lg:p-15 px-15 py-5 rounded-sm h-full flex items-center">
          <p className="text-gray-400 text-base font-title leading-[18px]">
            Экономия 15%
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlanAnnualSwitch;
