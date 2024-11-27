import Tag from "./Tag";

const TechTags = ({ inverseColor = false, children }) => {
  if (!children || children.length == 0) return null;

  const handleClick = (tagLink) => {
    window.open(tagLink);
  };

  return (
    <div className="flex flex-col gap-5">
      <p
        className={`${
          inverseColor && `text-gray-100`
        } font-text font-normal text-sm leading-tight`}
      >
        Технологии
      </p>
      <div className="flex flex-wrap gap-5">
        {children.map((technology) => (
          <Tag
            key={technology.id}
            className={`bg-${technology.color}`}
            hoverable={technology.link}
            onClick={
              technology.link ? () => handleClick(technology.link) : null
            }
          >
            {technology.title}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TechTags;
