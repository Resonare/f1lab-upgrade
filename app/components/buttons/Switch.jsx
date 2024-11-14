const PlanAnnualSwitch = ({ className = "", children }) => {
  return (
    <div
      className={`${className} overflow-hidden bg-gray-400 w-fit p-5 sm:rounded-[10px] rounded-[15px] select-none`}
    >
      <div className="flex lg:flex-row sm:flex-col flex-row overflow-x-auto gap-5 sm:rounded-[5px] rounded-[10px]">{children}</div>
    </div>
  );
};

export default PlanAnnualSwitch;
