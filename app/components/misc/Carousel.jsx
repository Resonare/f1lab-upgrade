import { useRef, useState } from "react";

const Carousel = ({
  className,
  lastIndicatorIsLight = false,
  inverseColor = false,
  children,
}) => {
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
      let indicatorColorClasses = `text-f1-light`;

      if (i == curPage) {
        //If current page
        indicatorColorClasses = inverseColor
          ? `text-gray-100`
          : `text-gray-400`;
      } else if (!(i == children.length - 1 && lastIndicatorIsLight)) {
        //Not selected and not last (if last indicator must be light)
        indicatorColorClasses = inverseColor
          ? `text-gray-300`
          : `text-gray-200`;
      }

      pageIndicators.push(
        <div
          key={i}
          className={`${indicatorColorClasses} flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  return (
    <div className={`${className} border-gray-300 border-dashed`}>
      <div
        className={`${
          inverseColor && `border-gray-300`
        } border-t mx-[0.8px] border-dashed overflow-x-scroll flex [&>*]:min-w-[300px] [&>*]:snap-center snap-x-mandatory`}
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
