import Tag from "../misc/Tag";

const TagPicker = ({ tags, handleSelectTag, selectedTags }) => {
  return (
    <div className="flex overflow-x-scroll">
      {tags?.map((tagData) => (
        <div
          key={tagData.id}
          className={
            selectedTags && selectedTags.has
              ? selectedTags?.has(tagData.id)
                ? `border-[5px] border-gray-400`
                : `p-5`
              : `p-5`
          }
        >
          <Tag
            className={`bg-[var(--tag-color)] w-fit`}
            style={{ "--tag-color": tagData.color }}
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
