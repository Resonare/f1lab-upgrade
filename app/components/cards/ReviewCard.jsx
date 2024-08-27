import { useState } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import ArrowNext from "../misc/reviewButtons/ArrowPrev";
import ArrowPrev from "../misc/reviewButtons/ArrowNext";

const ReviewCard = ({ row, col, reviewPaths, reviewsOnPage = 1, className }) => {
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
      <div key={index} className="flex-1 max-w-[400px]">
        <div>
          <img src={`/images/reviews/${reviewPath}`}></img>
        </div>
      </div>
    ));
  };

  return (
    <div className={`${row} ${col} ${className} h-full gap-60 flex flex-col justify-start`}>
      <div className="lg:border-y-[1px] border-b-[1px] border-dashed max-lg:pt-60">
        <p className="pb-30 font-bold lg:text-[26px] text-[22px] font-subtitle lg:text-right">
          Что о нас говорят?
        </p>
        <div className="max-lg:hidden">
          <SecondaryButton variant="shaded">
            <p className="text-gray-400 text-base font-subtitle">Все отзывы</p>
          </SecondaryButton>
        </div>
        <div className="pr-[1px]">
          <div className="flex justify-between gap-10">{getCurReviews()}</div>
          <div className="lg:hidden">
            <SecondaryButton variant="shaded">
              <p className="text-gray-400 text-base font-subtitle">
                Все отзывы
              </p>
            </SecondaryButton>
          </div>
          <div className="flex flex-col lg:gap-10">
            <div className="w-full px-15 justify-between items-center inline-flex">
              {getPageIndicators()}
            </div>
            <div className="flex lg:gap-15 gap-60">
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
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
