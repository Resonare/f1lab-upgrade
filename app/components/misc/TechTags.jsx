import Tag from "./Tag";

const TechTags = ({ inverseColor = false, children }) => {
  const technologies = children;

  if (!technologies || technologies.length == 0) return null;

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
        {technologies.map((technology, index) => (
          <Tag key={index} className={technology.color} hoverable={false}>
            {technology.title}
          </Tag>
        ))}
      </div>
    </div>
  );
};

export default TechTags;
