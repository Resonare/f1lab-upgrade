import BackgroundGrid from "./BackgroundGrid";

const Section = ({
  id,
  inverseColor = false,
  customBackground,
  customLinesColor,
  hero = false,
  innerClassName = "",
  className = "",
  children,
}) => {
  return (
    <div
      id={id}
      className={`${hero && `sm:pt-60 pt-15`}
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
        } ${innerClassName} z-[100] grid sm:grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
