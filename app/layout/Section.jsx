import BackgroundGrid from "../components/BackgroundGrid";

const Section = ({
  id,
  inverseColor = false,
  customBackground,
  customLinesColor,
  hero = false,
  className = "",
  children,
}) => {
  return (
    <div
      id={id}
      className={`
      ${inverseColor && `z-[1]`} ${className} max-sm:pb-15 relative`}
    >
      {inverseColor ? (
        <BackgroundGrid
          inverseColor={inverseColor}
          customBackground={customBackground}
          customLinesColor={customLinesColor}
        />
      ) : null}
      <div
        className={`${inverseColor ? `sm:py-60` : ``} ${
          !hero && `max-sm:pt-60`
        } z-[100] grid sm:grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
