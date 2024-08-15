const BottomRightLeft = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className=""></div>
      <div className=""></div>
      <div
        className={`border-t rounded-tr-2xl border-dashed border-gray-400 ${
          fix ? "-m-[1px]" : ""
        }`}
      ></div>
      <div
        className={`border-t border-l rounded-tl-2xl border-dashed border-gray-400 ${
          fix ? "-m-[1px]" : ""
        }`}
      ></div>
    </div>
  );
};

export default BottomRightLeft;
