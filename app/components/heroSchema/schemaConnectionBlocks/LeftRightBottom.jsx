const RightBottomLeft = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className="border-b border-dashed border-gray-400"></div>
      <div className="border-b border-dashed border-gray-400"></div>
      <div
        className={`border-r rounded-tr-2xl border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div className=""></div>
    </div>
  );
};

export default RightBottomLeft;
