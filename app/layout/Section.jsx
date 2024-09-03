import BackgroundGrid from "../components/BackgroundGrid";

const Section = ({
  id,
  rowsAmount = 1,
  inverseColor = false,
  className = "",
  children,
}) => {
  return (
    <div id={id} className={`${className} relative`}>
      {inverseColor ? <BackgroundGrid inverseColor={inverseColor} /> : null}
      <div
        className={`${
          inverseColor ? "sm:py-100" : ""
        } grid grid-rows-${rowsAmount} sm:grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 max-sm:pt-60 max-sm:pb-15`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
