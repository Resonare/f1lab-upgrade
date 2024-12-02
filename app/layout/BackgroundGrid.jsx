const BackgroundGrid = ({
  inverseColor = false,
  customBackground,
  customLinesColor = "",
  striped = true,
  className = "",
}) => {
  const linesColor = customLinesColor
    ? customLinesColor
    : inverseColor
    ? "border-gray-300"
    : "border-gray-200";

  return (
    <div
      className={`${className} ${
        striped && !inverseColor && `max-sm:bg-striped`
      } ${inverseColor ? `absolute z-[-1]` : `fixed z-[-10]`} ${
        customLinesColor ? customLinesColor : `border-gray-300`
      } top-0 max-w-[1921.4px] w-full h-full border-dashed`}
    >
      {inverseColor && (
        <div
          className={`${customBackground ? customBackground : `bg-gray-400`} ${
            !customBackground && `max-sm:bg-dark-striped`
          } h-full w-[calc(100svw)] z-[-9] absolute left-1/2 -translate-x-1/2`}
        ></div>
      )}

      <div
        className={`${
          inverseColor &&
          `${customLinesColor ? customLinesColor : `border-gray-300`} border-x`
        } max-2xl:hidden absolute h-full w-full grid grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 border-dashed`}
      ></div>

      <div
        className={`border-collapse h-full w-full grid grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 border-dashed`}
      >
        <div
          className={`sm:border-x border-l border-dashed ${
            !inverseColor && `mr-[-1px]`
          } ${linesColor}`}
        ></div>
        <div
          className={`border-r border-dashed ${
            !inverseColor && `mr-[-1px]`
          } ${linesColor}`}
        ></div>
        <div
          className={`sm:border-r border-dashed ${
            !inverseColor && `mr-[-1px]`
          } ${linesColor}`}
        ></div>
        <div
          className={`border-r border-dashed ${
            !inverseColor && `mr-[-1px]`
          } ${linesColor}`}
        ></div>
      </div>
    </div>
  );
};

export default BackgroundGrid;
