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
        <p
          key={i}
          className={`${indicatorColorClasses} grow flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          •
        </p>
      );
    }

    return pageIndicators;
  };

  if (!children || children.filter((child) => child).length == 0)
    return (
      <div className="text-gray-400 font-extended font-bold text-[20px]">
        Нет элементов
      </div>
    );

  return (
    <div className={`${className} border-gray-300 border-dashed`}>
      <div
        className={`${
          inverseColor && `border-gray-300`
        } border-y mx-[0.8px] border-dashed overflow-x-scroll flex [&>*]:min-w-[300px] [&>*]:snap-center snap-x-mandatory`}
        onScroll={scrollHandle}
        ref={carouselRef}
      >
        {children}
      </div>
      <div className="flex w-full">{getPageIndicators()}</div>
    </div>
  );
};

export default Carousel;
