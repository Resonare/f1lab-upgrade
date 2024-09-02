const BackgroundGrid = ({ inverseColor = false }) => {
  const linesColor = inverseColor ? "border-gray-300" : "border-gray-200";

  return (
    <>
      {inverseColor && (
        <div
          className={`bg-gray-400 absolute -z-[9] grid grid-cols-4 max-w-[1920px] w-full h-full sm:px-[44.1px] px-15 lg:px-60 xl:px-120`}
        >
          <div className={`sm:border-x border-l border-dashed ${linesColor}`}></div>
          <div className={`border-r border-dashed ${linesColor}`}></div>
          <div className={`sm:border-r border-dashed ${linesColor}`}></div>
          <div className={`border-r border-dashed ${linesColor}`}></div>
        </div>
      )}
      {!inverseColor && (
        <div className="max-sm:bg-striped fixed top-[70px] xl:top-90 -z-10 grid grid-cols-4 max-w-[1920px] w-full h-full sm:px-[44.1px] px-15 lg:px-60 xl:px-120">
          <div className="sm:border-x border-l border-dashed border-gray-200"></div>
          <div className="border-r border-dashed border-gray-200"></div>
          <div className="sm:border-r border-dashed border-gray-200"></div>
          <div className="border-r border-dashed border-gray-200"></div>
        </div>
      )}
    </>
  );
};

export default BackgroundGrid;
