const PlanAnnualSwitch = ({ className = "", children }) => {
  return (
    <div
      className={`${className} bg-gray-400 w-fit p-5 sm:rounded-[10px] rounded-[15px] gap-5 flex select-none`}
    >
      {children}
    </div>
  );
};

export default PlanAnnualSwitch;
