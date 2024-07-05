const SimpleCard = ({ row, col, width = 1, height = 1, children }) => {
  return (
    <div
      className={`border-t-grey border-b-grey p-30 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed`}
      style={{
        "grid-column": `${col} / ${col + width}`,
        "grid-row": `${row} / ${row + height}`,
      }}
    >
      <p className="text-gray-400 text-[1.1rem] font-light font-text leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default SimpleCard;
