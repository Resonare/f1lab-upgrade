import { useState } from "react";

import CritiqueCard from "../components/cards/CritiqueCard";

import ArrowPrev from "../components/misc/reviewButtons/ArrowPrev";
import ArrowNext from "../components/misc/reviewButtons/ArrowNext";

const CritiquesSection = ({
  critiquesData,
  row = "",
  col = "",
  cardsOnPage,
  minimized = false,
  inverseColor = false,
  className = "",
}) => {
  if (!critiquesData || critiquesData.length <= 0) return;

  const [curPage, setCurPage] = useState(0);
  cardsOnPage = minimized ? 1 : cardsOnPage;
  const pagesAmount = Math.ceil(critiquesData.length / cardsOnPage);

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
            i == curPage
              ? inverseColor
                ? `text-gray-100`
                : `text-gray-400`
              : inverseColor
              ? `text-gray-300`
              : `text-gray-200`
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  return (
    <div
      className={`${row} ${col} ${className} ${
        inverseColor ? `border-gray-300` : `border-gray-200`
      } border-dashed max-lg:w-full`}
    >
      <div
        className={`${!minimized && `lg:border-l gap-30`} ${
          inverseColor ? `border-gray-300` : `border-gray-200`
        } border-dashed flex flex-col`}
      >
        <div className={`${minimized && `hidden`}`}>
          <p
            className={`${
              inverseColor && `text-gray-100`
            } pb-30 font-extrabold font-expanded lg:text-[40px] sm:text-[22px] text-2xl max-sm:leading-[30px]`}
          >
            Что о нас говорят?
          </p>
        </div>
        <div className="flex w-full">
          {critiquesData
            .slice(cardsOnPage * curPage, cardsOnPage * curPage + cardsOnPage)
            .map((critiqueData, index, array) => (
              <CritiqueCard
                key={index}
                className={`${index != array.length - 1 && `border-r`} ${
                  minimized ? `` : `ml-[1px] grow basis-0 border-y justify-between`
                } max-sm:border-t max-sm:border-x max-sm:w-full`}
                minimized={minimized}
                inverseColor={inverseColor}
                critiqueData={critiqueData}
              />
            ))}
        </div>

        <div
          className={`${critiquesData.length < cardsOnPage + 1 && `hidden`} ${
            minimized && `flex-col border-y border-dashed`
          } ${inverseColor && `border-gray-300`} flex max-md:flex-col justify-between`}
        >
          <div
            className={`${
              !minimized && `xl:w-1/4 md:w-1/2 w-full`
            } px-15 justify-between items-center inline-flex max-sm:order-last`}
          >
            {getPageIndicators()}
          </div>
          <div
            className={`${
              !minimized && `md:w-1/2 w-full`
            } flex max-sm:justify-between lg:gap-15 sm:gap-60`}
          >
            <ArrowNext
              className={`${
                inverseColor ? `border-gray-300` : `border-gray-200`
              } lg:pl-40 sm:p-15 sm:pl-20 lg:hover:pr-40 sm:hover:pl-15 sm:hover:pr-20 w-full max-sm:border-b max-sm:border-r border-dashed`}
              inverseColor={inverseColor}
              onClick={handlePrev}
            />
            <ArrowPrev
              className={`${
                inverseColor ? `border-gray-300` : `border-gray-200`
              } lg:pr-40 sm:p-15 sm:pr-20 lg:hover:pl-40 sm:hover:pr-15 sm:hover:pl-20 w-full max-sm:border-b border-dashed`}
              inverseColor={inverseColor}
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CritiquesSection;
