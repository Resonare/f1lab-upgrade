const ScenarioCard = ({ iconName, descriptionText, position }) => {
  return (
    <div
      className="p-[30px] border-t-grey border-t-[1px] border-b-grey border-b-[1px] border-dashed flex flex-col gap-1"
      style={{
        "grid-column": `${(position) % 4 + 1}`,
        "grid-row": `${Math.floor(position / 4) + 1}`,
      }}
    >
      <div className="w-20 h-20 relative">
        <img src={`/images/${iconName}`} alt="" />
      </div>
      <p className="text-black text-xl font-light font-text leading-relaxed">
        {descriptionText}
      </p>
    </div>
  );
};

export default ScenarioCard;
