const BottomLeft = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className=""></div>
      <div className=""></div>
      <div
        className={`border-t border-r rounded-tr-2xl border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div className=""></div>
    </div>
  );
};

export default BottomLeft;
