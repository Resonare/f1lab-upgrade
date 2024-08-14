const TopBottomLeft = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className="border-b rounded-br-2xl border-dashed border-gray-400"></div>
      <div
        className={`border-l border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div className="border-r border-dashed border-gray-400"></div>
      <div className=""></div>
    </div>
  );
};

export default TopBottomLeft;
