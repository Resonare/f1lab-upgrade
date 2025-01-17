import ArrowURPrimary from "../misc/svg/ArrowURPrimary";

const PrimaryButton = ({
  row = "",
  col = "",
  type = "accent",
  className = "",
  fullHeight = false,
  onClick,
  children,
  ...otherAttributes
}) => {
  //Primary Button types: accent, dark, light, dark-to-light, accent-to-light

  //Computing button color depending on type
  let buttonColor = "";
  let arrowHoverColor = "";
  let arrowColor = "";

  if (type === "accent") {
    buttonColor =
      "bg-f1-light text-gray-400 hover:bg-gray-400 hover:text-f1-light";
    arrowColor = "stroke-gray-400";
    arrowHoverColor = "stroke-f1-light";
  } else if (type === "dark") {
    buttonColor =
      "bg-gray-400 text-f1-light hover:bg-f1-light hover:text-gray-400";
    arrowColor = "stroke-f1-light";
    arrowHoverColor = "stroke-gray-400";
  } else if (type === "light") {
    buttonColor = "bg-gray-100 text-gray-400 hover:bg-f1-light";
    arrowColor = "stroke-gray-400";
    arrowHoverColor = "stroke-gray-400";
  } else if (type === "dark-to-light") {
    buttonColor =
      "bg-gray-400 text-f1-light hover:bg-gray-100 hover:text-gray-400";
    arrowColor = "stroke-f1-light";
    arrowHoverColor = "stroke-gray-400";
  } else if (type === "accent-to-light") {
    buttonColor = "bg-f1-light text-gray-400 hover:bg-gray-100";
    arrowColor = "stroke-gray-400";
    arrowHoverColor = "stroke-gray-400";
  }

  return (
    <div
      {...otherAttributes}
      className={`${className} ${row} ${col} w-full select-none`}
      onClick={onClick}
    >
      <button
        className={`${buttonColor} ${
          fullHeight === "true" ||
          (typeof fullHeight == "boolean" && fullHeight)
            ? "h-full"
            : ""
        } group flex items-center justify-between py-15 pl-30 pr-15 w-full sm:text-xl text-base font-subtitle leading-normal transition-all duration-300`}
      >
        <p className="my-[2px]">{children}</p>
        <div className="p-[7px] group-hover:pt-0 group-hover:pb-[14px] group-hover:pr-0 group-hover:pl-[14px] transition-all duration-300">
          <ArrowURPrimary color={arrowColor} hoverColor={arrowHoverColor} />
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
