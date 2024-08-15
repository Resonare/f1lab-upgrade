const RightBottom = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
      <div
        className={`border-l border-t border-dashed border-gray-400 rounded-tl-2xl ${
          fix ? "-m-[1px]" : ""
        } `}
      ></div>
    </div>
  );
};

export default RightBottom;
