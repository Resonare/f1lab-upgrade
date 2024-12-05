import { useState } from "react";

import ExpertCard from "../components/cards/ExpertCard";
import ArrowPrev from "../components/misc/reviewButtons/ArrowPrev";
import ArrowNext from "../components/misc/reviewButtons/ArrowNext";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SecondaryButton from "../components/buttons/SecondaryButton";

const ExpertsCarousel = ({ expertsData, cardsOnPage = 4, className = "" }) => {
  if (!expertsData || expertsData.length <= 0) return;

  const [curPage, setCurPage] = useState(0);
  const pagesAmount = Math.ceil(expertsData.length / cardsOnPage);

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () =>
    setCurPage((prevPage) => handleOverflow(prevPage + 1, 0, pagesAmount - 1));

  const handlePrev = () =>
    setCurPage((prevPage) => handleOverflow(prevPage - 1, 0, pagesAmount - 1));

  const isOnCurPage = (index) =>
    index >= curPage * cardsOnPage && index < (curPage + 1) * cardsOnPage;

  const getPageIndicators = () => {
    const pageIndicators = [];

    for (let i = 0; i < pagesAmount; i++) {
      pageIndicators.push(
        <div
          key={i}
          className={`${
            i == curPage ? `text-f1-light` : `text-gray-300`
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  return (
    <div className={`${className} grid grid-cols-4`}>
      <div className="row-start-2 mb-30 col-start-1 col-end-5 flex border-t border-b border-gray-300 border-dashed">
        {expertsData.map((expertData, index) =>
          isOnCurPage(index) ? (
            <ExpertCard
              key={index}
              style={{ width: `${100 / cardsOnPage}%` }}
              expertData={expertData}
              inverseColor={true}
              minimized={true}
            />
          ) : null
        )}
      </div>

      <PrimaryButton
        className="lg:col-start-1 col-start-3 lg:col-end-2 col-end-5 row-start-3"
        type="accent-to-light"
      >
        Начать работу
      </PrimaryButton>

      <div
        className={`${
          expertsData.length <= cardsOnPage && `hidden`
        } lg:col-start-2 col-start-1 lg:col-end-4 col-end-5 lg:row-start-3 row-start-4 flex gap-30`}
      >
        <ArrowNext
          className="lg:order-1 order-2 p-15 lg:pl-40 pl-20 sm:hover:pl-15 sm:hover:pr-20 lg:hover:pr-40 sm:w-full w-1/3 max-sm:border-b max-sm:border-r border-dashed border-gray-300"
          inverseColor={true}
          onClick={handlePrev}
        />
        <div className="lg:order-2 order-1 w-full px-15 justify-between items-center inline-flex max-sm:order-last">
          {getPageIndicators()}
        </div>
        <ArrowPrev
          className="lg:order-3 order-3 p-15 lg:pr-40 pr-20 sm:hover:pr-15 sm:hover:pl-20 lg:hover:pl-40 sm:w-full w-1/3 max-sm:border-b max-sm:border-l border-dashed border-gray-300"
          inverseColor={true}
          onClick={handleNext}
        />
      </div>

      <div className="lg:col-start-4 col-start-1 lg:col-end-5 col-end-3 row-start-3 flex items-center">
        <SecondaryButton variant="dark-shaded">Все сотрудники</SecondaryButton>
      </div>
    </div>
  );
};

export default ExpertsCarousel;
