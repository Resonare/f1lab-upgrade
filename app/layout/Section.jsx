import BackgroundGrid from "../components/BackgroundGrid";

const Section = ({
  id,
  inverseColor = false,
  hero = false,
  className = "",
  children,
}) => {
  return (
    <div
      id={id}
      className={`${
        hero && `sm:pt-60 pt-15 lg:mt-90 mt-[70px]`
      } ${className} relative`}
    >
      {inverseColor ? <BackgroundGrid inverseColor={inverseColor} /> : null}
      <div
        className={`${
          inverseColor ? "sm:py-100" : ""
        } grid sm:grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 max-sm:pt-60 max-sm:pb-15`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
