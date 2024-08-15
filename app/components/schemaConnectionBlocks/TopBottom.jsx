const TopBottom = ({ left, right }) => {
  return (
    <div className="grid grid-cols-2">
      <div
        className={`${
          left || !right ? "border-r border-dashed border-gray-400" : ""
        }`}
      ></div>
      <div
        className={`${right ? "border-l border-dashed border-gray-400" : ""}`}
      ></div>
    </div>
  );
};
export default TopBottom;
