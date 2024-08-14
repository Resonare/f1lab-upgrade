const BackgroundGrid = ({ inverseColor = false }) => {
  const linesColor = inverseColor ? "border-gray-300" : "border-gray-200";

  return (
    <div
      className={`${
        inverseColor ? "bg-gray-400" : ""
      } absolute -z-[9] grid grid-cols-4 max-w-[1920px] w-full h-full px-[44.1px] lg:px-60 xl:px-120`}
    >
      <div className={`border-x border-dashed ${linesColor}`}></div>
      <div className={`border-r border-dashed ${linesColor}`}></div>
      <div className={`border-r border-dashed ${linesColor}`}></div>
      <div className={`border-r border-dashed ${linesColor}`}></div>
    </div>
  );
};

export default BackgroundGrid;
