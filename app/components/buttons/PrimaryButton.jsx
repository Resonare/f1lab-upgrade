import ArrowURPrimary from "../misc/ArrowURPrimary";

const PrimaryButton = ({
  row,
  col,
  type = "accent",
  className = "",
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
      className={`${className} ${row} ${col} group lg:pt-0 pt-30`}
    >
      <button
        className={`${buttonColor} h-full flex items-center justify-between py-15 pl-30 pr-15 w-full text-xl font-subtitle leading-normal transition-all duration-300`}
      >
        {children}
        <div className="p-10 group-hover:pt-0 group-hover:pr-0 transition-all duration-300">
          <ArrowURPrimary color={arrowColor} hoverColor={arrowHoverColor} />
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
