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
        inverseColor ? `2xl:border-gray-300` : `2xl:border-gray-200`
      } ${
        hero && `sm:pt-60 pt-15 lg:mt-90 mt-[70px]`
      } ${className} max-sm:pb-15 relative 2xl:border-x 2xl:border-dashed`}
    >
      {inverseColor ? <BackgroundGrid inverseColor={inverseColor} /> : null}
      <div
        className={`${inverseColor ? `sm:py-60` : ``} ${
          !hero && `max-sm:pt-60`
        } grid sm:grid-cols-4 xl:px-120 lg:px-60 sm:px-[44.1px] px-15`}
      >
        {children}
      </div>
    </div>
  );
};

export default Section;
