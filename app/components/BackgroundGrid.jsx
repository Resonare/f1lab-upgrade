const BackgroundGrid = ({ inverseColor = false }) => {
  const linesColor = inverseColor ? "border-gray-300" : "border-gray-200";

  return (
    <div
      className={`${
        inverseColor
          ? `max-sm:bg-dark-striped bg-gray-400 absolute -z-[9]`
          : `max-sm:bg-striped fixed top-0 -z-10`
      } grid grid-cols-4 max-w-[1920px] w-full h-full xl:px-120 lg:px-60 sm:px-[44.1px] px-15`}
    >
      <div className={`sm:border-x border-l border-dashed ${linesColor}`}></div>
      <div className={`border-r border-dashed ${linesColor}`}></div>
      <div className={`sm:border-r border-dashed ${linesColor}`}></div>
      <div className={`border-r border-dashed ${linesColor}`}></div>
    </div>
  );
};

export default BackgroundGrid;
