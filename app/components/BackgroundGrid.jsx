const BackgroundGrid = () => {
  return (
    <div className="absolute h-[200vh] w-full z-[-1] grid grid-cols-[1fr_1fr_1fr_1fr] px-[120px] py-0">
      <div className="h-full border-l-grey border-l-[1px] border-dashed"></div>
      <div className="h-full border-l-grey border-l-[1px] border-dashed"></div>
      <div className="h-full border-l-grey border-l-[1px] border-dashed"></div>
      <div className="h-full border-l-grey border-l-[1px] border-dashed border-r-grey border-r-[1px] border-dashed"></div>
    </div>
  );
};

export default BackgroundGrid;
