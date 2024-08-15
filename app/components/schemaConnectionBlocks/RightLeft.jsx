const RightLeft = ({ up, down, colSpan = "col-span-1" }) => {
  return (
    <div className={`grid grid-rows-2 ${colSpan}`}>
      <div
        className={`${
          up || !down ? "border-b border-dashed border-gray-400" : ""
        }`}
      ></div>
      <div
        className={`${down ? "border-t border-dashed border-gray-400" : ""}`}
      ></div>
    </div>
  );
};

export default RightLeft;
