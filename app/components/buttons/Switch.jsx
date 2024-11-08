const PlanAnnualSwitch = ({ className = "", children }) => {
  return (
    <div
      className={`${className} flex flex-row gap-5 bg-gray-400 w-fit p-5 sm:rounded-[10px] rounded-[15px] select-none`}
    >
      {children}
    </div>
  );
};

export default PlanAnnualSwitch;
