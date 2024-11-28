import Tag from "../misc/Tag";

const TagPicker = ({ tags, handleSelectTag, selectedTags }) => {
  return (
    <div className="flex">
      {tags.map((tagData) => (
        <div
          key={tagData.id}
          className={
            selectedTags.has(tagData.id)
              ? `border-[5px] border-gray-400`
              : `p-5`
          }
        >
          <Tag
            className={`bg-${tagData.color} w-fit`}
            inverseColor={tagData.inverseColor}
            onClick={() => handleSelectTag(tagData.id)}
          >
            {tagData.title}
          </Tag>
        </div>
      ))}
    </div>
  );
};

export default TagPicker;
