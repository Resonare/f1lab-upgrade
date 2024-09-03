import { useRef, useState } from "react";

const Carousel = ({ className, lastIndicatorIsLight = false, children }) => {
  const [curPage, setCurPage] = useState(0);
  const carouselRef = useRef();

  const scrollHandle = (event) => {
    const newCurPage = Math.floor(
      (event.target.scrollLeft + event.target.clientWidth / 2) / 300
    );

    if (curPage != newCurPage) setCurPage(newCurPage);
  };

  const getPageIndicators = () => {
    const pageIndicators = [];

    for (let i = 0; i < children.length; i++) {
      pageIndicators.push(
        <div
          key={i}
          className={`${
            i == curPage
              ? "text-gray-400"
              : i == children.length - 1 && lastIndicatorIsLight
              ? "text-f1-light"
              : "text-gray-200"
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  return (
    <div>
      <div
        className={`${className} mx-[0.3px] border-dashed overflow-x-scroll flex [&>*]:min-w-[300px] [&>*]:snap-center snap-x-mandatory`}
        onScroll={scrollHandle}
        ref={carouselRef}
      >
        {children}
      </div>
      <div className="flex">{getPageIndicators()}</div>
    </div>
  );
};

export default Carousel;
