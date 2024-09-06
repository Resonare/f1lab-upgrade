import { useState } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import ArrowNext from "../misc/reviewButtons/ArrowPrev";
import ArrowPrev from "../misc/reviewButtons/ArrowNext";

const ReviewCard = ({
  row = "",
  col = "",
  reviewPaths,
  reviewsOnPage = 1,
  className,
}) => {
  const [curPage, setCurPage] = useState(0);
  const pagesAmount = Math.ceil(reviewPaths.length / reviewsOnPage);

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () => {
    setCurPage((prevPage) => handleOverflow(prevPage + 1, 0, pagesAmount - 1));
  };

  const handlePrev = () => {
    setCurPage((prevPage) => handleOverflow(prevPage - 1, 0, pagesAmount - 1));
  };

  const getPageIndicators = () => {
    const pageIndicators = [];

    for (let i = 0; i < pagesAmount; i++) {
      pageIndicators.push(
        <div
          key={i}
          className={`${
            i == curPage ? "text-gray-400" : "text-gray-200"
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  const getCurReviews = () => {
    const curReviewPaths = reviewPaths.slice(
      curPage * reviewsOnPage,
      curPage * reviewsOnPage + reviewsOnPage
    );

    return curReviewPaths.map((reviewPath, index) => (
      <div
        key={index}
        className={`${
          reviewsOnPage <= 1 ? "w-full" : "max-w-[400px]"
        } bg-[white] h-[400px] flex justify-center items-center`}
      >
        <img
          src={`/images/reviews/${reviewPath}`}
          className="max-h-[400px]"
        ></img>
      </div>
    ));
  };

  return (
    <div
      className={`${row} ${col} ${className} h-full gap-60 flex flex-col justify-start`}
    >
      <div className="lg:border-y-[1px] sm:border-b-[1px] border-dashed lg:pt-0 sm:pt-60 pt-0">
        <p className="pb-30 font-bold font-extended lg:text-[26px] sm:text-[22px] text-2xl max-sm:leading-[30px] lg:text-right max-sm:text-right">
          Что о нас говорят?
        </p>
        <div className="max-lg:hidden">
          <SecondaryButton variant="shaded" className="text-base font-subtitle">
            Все отзывы
          </SecondaryButton>
        </div>
        <div>
          <div className="flex justify-between gap-10 max-sm:mx-[1px]">
            {getCurReviews()}
          </div>

          <div className="lg:hidden max-sm:hidden">
            <SecondaryButton
              variant="shaded"
              className="text-base font-subtitle"
            >
              Все отзывы
            </SecondaryButton>
          </div>

          <div className="flex flex-col lg:gap-10">
            <div className="sm:hidden flex">
              <div className="flex-1 flex lg:gap-15 gap-60 border-r border-b border-dashed">
                <ArrowPrev className="p-20" onClick={handlePrev} />
              </div>
              <div className="flex-1"></div>
              <div className="flex-1 flex lg:gap-15 gap-60 border-l border-b border-dashed">
                <ArrowNext className="p-20" onClick={handleNext} />
              </div>
            </div>

            <div className="w-full px-15 justify-between items-center inline-flex">
              {getPageIndicators()}
            </div>
            <div className="flex lg:gap-15 gap-60 max-sm:hidden">
              <ArrowPrev
                className="p-15 lg:pl-40 pl-20 hover:pl-15 hover:pr-20 lg:hover:pr-40 w-full"
                onClick={handlePrev}
              />
              <ArrowNext
                className="p-15 lg:pr-40 pr-20 hover:pr-15 hover:pl-20 lg:hover:pl-40 w-full"
                onClick={handleNext}
              />
            </div>
          </div>

          <div className="sm:hidden">
            <SecondaryButton
              variant="shaded"
              className="text-base font-subtitle"
            >
              Все отзывы
            </SecondaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
