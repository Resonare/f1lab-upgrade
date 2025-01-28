const PlanDevicesCounter = ({
  className = "",
  buttonsClassName = "",
  onAddDevice,
  onRemoveDevice,
  devicesCount,
  setDevicesCount,
  canInput,
  min,
  max,
}) => {
  return (
    <div
      className={`${className} bg-gray-400 p-5 lg:w-[180px] rounded-[10px] flex justify-between items-center`}
    >
      <div
        className={`${buttonsClassName} bg-gray-300 py-5 rounded-[5px] text-[28px] font-expanded font-extrabold text-gray-100 select-none cursor-pointer hover:bg-gray-250 transition-all`}
        onClick={onRemoveDevice}
      >
        -
      </div>
      {!canInput && (
        <p className="text-gray-100 text-xl font-expanded font-bold py-5">
          {devicesCount}
        </p>
      )}
      {canInput && (
        <input
          className="text-gray-100 text-xl font-expanded font-bold py-5 bg-gray-400 w-60 text-center"
          value={devicesCount}
          onChange={(event) => {
            if (event.target.value < min) {
              setTimeout(() => {
                setDevicesCount(min);
              }, 2000);
            }
            setDevicesCount(event.target.value);
          }}
        />
      )}
      <div
        className={`${buttonsClassName} bg-f1-light py-5 rounded-[5px] text-[28px] font-expanded font-extrabold text-gray-400 select-none cursor-pointer hover:bg-[#63ffdc] transition-all`}
        onClick={onAddDevice}
      >
        +
      </div>
    </div>
  );
};

export default PlanDevicesCounter;
