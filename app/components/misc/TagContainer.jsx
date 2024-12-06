import Tag from "./Tag";

const TagContainer = ({
  title,
  titleClassName = "",
  inverseColor = false,
  className = "",
  children,
}) => {
  if (!children || children.length == 0) return null;

  const handleClick = (tagLink) => {
    window.open(tagLink);
  };

  return (
    <div className={`${className} flex flex-col gap-5`}>
      <p
        className={`${
          inverseColor
            ? `text-gray-100 font-light`
            : `text-gray-400 font-normal`
        } font-text text-sm leading-tight`}
      >
        <span className={`${titleClassName}`}>{title}</span>
      </p>
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
    </div>
  );
};

export default TagContainer;
