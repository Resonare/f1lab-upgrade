import ArrowURPrimary from "../misc/ArrowURPrimary";

const PrimaryButton = ({
  row = "",
  col = "",
  type = "accent",
  className = "",
  fullHeight = false,
  children,
  ...otherAttributes
}) => {
  //Primary Button types: accent, dark, light

  //Computing button color depending on type
  let buttonColor = "";
  let arrowHoverColor = "";
  let arrowColor = "";

  if (type === "accent") {
    buttonColor =
      "bg-f1-light text-gray-400 hover:bg-gray-400 hover:text-f1-light";
    arrowColor = "bg-gray-400";
    arrowHoverColor = "bg-f1-light";
  } else if (type === "dark") {
    buttonColor =
      "bg-gray-400 text-f1-light hover:bg-f1-light hover:text-gray-400";
    arrowColor = "bg-gray-400";
    arrowHoverColor = "bg-f1-light";
  } else if (type === "light") {
    buttonColor = "bg-gray-100 text-gray-400 hover:bg-f1-light";
    arrowColor = "bg-gray-400";
    arrowHoverColor = "bg-f1-light";
  }

  return (
    <div
      {...otherAttributes}
      className={`${className} ${row} ${col} w-full`}
    >
      <button
        className={`${buttonColor} ${
          fullHeight === "true" ||
          (typeof fullHeight == "boolean" && fullHeight)
            ? "h-full"
            : ""
        } group flex items-center justify-between py-15 pl-30 pr-15 w-full sm:text-xl text-base font-subtitle leading-normal transition-all duration-300`}
      >
        <div>{children}</div>
        <div className="p-[7px] group-hover:pt-0 group-hover:pr-0 transition-all duration-300">
          <ArrowURPrimary color={arrowColor} hoverColor={arrowHoverColor} />
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
