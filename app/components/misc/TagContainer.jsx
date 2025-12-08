import PropTypes from "prop-types";
import Tag from "./Tag";

const TagContainer = ({
  title = "",
  titleClassName = "",
  inverseColor = false,
  className = "",
  hoverable,
  children = [],
}) => {
  if (!children || children.length === 0) return null;

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
        <span className={`${titleClassName}`}>{title ?? "123"}</span>
      </p>
      <div className="flex flex-wrap gap-5">
        {children.map((tag) => {
          if (tag === undefined) return null;

          return (
            <Tag
              key={tag.id || Math.random()}
              className={`bg-[var(--tag-color)]`}
              style={{ "--tag-color": tag.color }}
              hoverable={hoverable !== undefined ? hoverable : tag?.link}
              inverseColor={tag.inverseColor}
              onClick={tag.link ? () => handleClick(tag?.link) : null}
            >
              {tag.title}
            </Tag>
          )
        })}
      </div>
    </div>
  );
};

TagContainer.propTypes = {
  /** Title displayed above the tags */
  title: PropTypes.string,
  /** Additional className for the title */
  titleClassName: PropTypes.string,
  /** Whether to use inverse color scheme */
  inverseColor: PropTypes.bool,
  /** Additional className for the container */
  className: PropTypes.string,
  /** Whether all tags should be hoverable */
  hoverable: PropTypes.bool,
  /** Array of tag objects */
  children: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      title: PropTypes.string,
      color: PropTypes.string,
      link: PropTypes.string,
      inverseColor: PropTypes.bool,
    })
  ),
};

export default TagContainer;
