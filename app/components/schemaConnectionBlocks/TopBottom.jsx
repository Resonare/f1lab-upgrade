const TopBottom = ({ fix }) => {
  return (
    <div className="grid grid-cols-2">
      <div
        className={`border-r border-dashed border-gray-400 ${
          fix ? "-m-[0.8px]" : ""
        }`}
      ></div>
      <div className=""></div>
    </div>
  );
};
export default TopBottom;
