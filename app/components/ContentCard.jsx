const ContentCard = ({ cardData, inverseColor = false }) => {
  return (
    <div
      className={`${
        inverseColor
          ? "border-t-gray-300 border-b-gray-300"
          : "border-t-grey border-b-grey"
      } p-30 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed flex flex-col gap-[10px] min-h-[280px] flex flex-col justify-between`}
      style={{
        "grid-column": `${(cardData.position % 4) + 1}`,
        "grid-row": `${Math.floor(cardData.position / 4) + 1}`,
      }}
    >
      <div className="w-20 h-20 relative">
        <img src={`/images/${cardData.iconName}`} alt="" />
      </div>
      <p
        className={`${
          inverseColor ? "text-gray-100" : "text-gray-400"
        } text-[1.1rem] font-light font-text leading-relaxed`}
      >
        {cardData.descriptionText}
      </p>
    </div>
  );
};

export default ContentCard;
