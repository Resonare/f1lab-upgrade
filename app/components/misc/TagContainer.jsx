import Tag from "./Tag";

const TechTags = ({ children }) => {
  if (!children || children.length == 0) return null;

  const handleClick = (tagLink) => {
    window.open(tagLink);
  };

  return (
    <div className="flex flex-wrap gap-5">
      {children.map((tag) => (
        <Tag
          key={tag.id}
          className={`bg-${tag.color}`}
          hoverable={tag.link}
          inverseColor={tag.inverseColor}
          onClick={tag.link ? () => handleClick(tag.link) : null}
        >
          {tag.title}
        </Tag>
      ))}
    </div>
  );
};

export default TechTags;
