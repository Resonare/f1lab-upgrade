const TopRightLeft = ({ fixRight }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div
        className={`border-b rounded-br-2xl border-dashed border-gray-400 `}
      ></div>
      <div
        className={`border-b border-l rounded-bl-2xl border-dashed border-gray-400 ${
          fixRight ? "-m-[1px]" : ""
        }`}
      ></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default TopRightLeft;
