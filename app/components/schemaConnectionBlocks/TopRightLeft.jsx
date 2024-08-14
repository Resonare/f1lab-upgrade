const TopRightLeft = ({ fix }) => {
  return (
    <div className="grid grid-rows-2 grid-cols-2">
      <div
        className={`border-b rounded-br-2xl border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div
        className={`border-b border-l rounded-bl-2xl border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
};

export default TopRightLeft;
