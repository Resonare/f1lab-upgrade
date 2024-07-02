const SimpleCard = ({ row, col, style, children }) => {
  const rowClass = `row-start-${row + 1} row-end-${row + 2}`;
  const colClass = `col-start-${col + 1} col-end-${col + 2}`;

  return (
    <div
      className={`${
        (rowClass, colClass)
      }  border-t-grey border-b-grey p-30 mt-[-0.8px] border-t-[1px] border-b-[1px] border-dashed`}
      style={style}
    >
      <p className="text-gray-400 text-[1.1rem] font-light font-text leading-relaxed">
        {children}
      </p>
    </div>
  );
};

export default SimpleCard;
