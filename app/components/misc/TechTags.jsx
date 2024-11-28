import TagContainer from "./TagContainer";

const TechTags = ({ inverseColor = false, children }) => {
  if (!children || children.length == 0) return null;

  return (
    <div className="flex flex-col gap-5">
      <p
        className={`${
          inverseColor && `text-gray-100`
        } font-text font-normal text-sm leading-tight`}
      >
        Технологии
      </p>
      <TagContainer>{children}</TagContainer>
    </div>
  );
};

export default TechTags;
