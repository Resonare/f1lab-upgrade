import { useState, useContext } from "react";

import { ThemeContext } from "../../store/theme-context";

import { LazyImage } from "../LazyImage";
import SecondaryButton from "../buttons/SecondaryButton";
import ArrowPrev from "../misc/reviewButtons/ArrowPrev";
import ArrowNext from "../misc/reviewButtons/ArrowNext";
import Quote from "../misc/svg/Quote";

const CritiquesCard = ({
  critiquesData,
  row = "",
  col = "",
  minimized = false,
  inverseColor = false,
  className = "",
}) => {
  if (!critiquesData || critiquesData.length <= 0) return;

  const { bgColor } = useContext(ThemeContext);

  const [curPage, setCurPage] = useState(0);
  const pagesAmount = critiquesData.length;

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
            i == curPage ? `text-gray-400` : `text-gray-200`
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
        className={`${critiquesData.length != 1 && `border-b`} ${
          !minimized && `lg:border-l`
        } ${
          inverseColor ? `border-gray-300` : `border-gray-200`
        } border-dashed`}
      >
        <div className={`${minimized && `hidden`}`}>
          <p
            className={`${
              inverseColor && `text-gray-100`
            } pb-30 font-bold font-extended lg:text-[26px] sm:text-[22px] text-2xl max-sm:leading-[30px] lg:text-right max-sm:text-right`}
          >
            Что о нас говорят?
          </p>
          <SecondaryButton
            variant="shaded"
            className={`max-lg:hidden text-base font-subtitle`}
          >
            Все отзывы
          </SecondaryButton>
        </div>

        <div
          className={`${inverseColor ? `bg-gray-400` : bgColor} ${
            minimized ? `border-b` : `lg:border-b`
          } ${
            inverseColor ? `border-gray-300` : `border-gray-200`
          } max-lg:border-t gap-15 ml-[1px] max-sm:mr-[1px] sm:p-30 py-20 px-10 flex flex-col border-dashed`}
        >
          <div className={`${!minimized && `order-last`} flex gap-30`}>
            <LazyImage
              className="lg:w-90 w-60 lg:h-90 h-60 rounded-[15px]"
              src={critiquesData[curPage].avatarPath}
              alt=""
            />
            <div className="flex flex-col justify-center gap-5">
              <p
                className={`${
                  inverseColor ? `text-gray-100` : `text-gray-400`
                } text-[22px] font-extended font-bold`}
              >
                {critiquesData[curPage].title}
              </p>
              <p
                className={`${
                  inverseColor ? `text-gray-200` : `text-gray-300`
                } text-sm font-text font-bold uppercase tracking-wide`}
              >
                {critiquesData[curPage].subtitle}
              </p>
            </div>
          </div>
          <div className="flex gap-10">
            <Quote inverseColor={inverseColor} />

            <p
              className={`${
                inverseColor ? `text-gray-100` : `text-gray-400`
              } sm:text-xl text-base font-text font-light`}
            >
              {critiquesData[curPage].body}
            </p>

            <Quote
              className="flex flex-col justify-end"
              inverseColor={inverseColor}
            />
          </div>
        </div>

        <SecondaryButton
          variant={inverseColor ? `info` : `shaded`}
          className={`${minimized ? `hidden` : `lg:hidden`} ${
            inverseColor && `max-sm:border border-gray-300 max-sm:text-gray-100`
          } text-base font-subtitle`}
        >
          Все отзывы
        </SecondaryButton>

        <div className={`${critiquesData.length == 1 && `hidden`}`}>
          <div className="w-full px-15 justify-between items-center inline-flex">
            {getPageIndicators()}
          </div>
          <div className={`flex lg:gap-15 gap-60`}>
            <ArrowNext
              className="p-15 lg:pl-40 pl-20 hover:pl-15 hover:pr-20 lg:hover:pr-40 w-full"
              onClick={handlePrev}
            />
            <ArrowPrev
              className="p-15 lg:pr-40 pr-20 hover:pr-15 hover:pl-20 lg:hover:pl-40 w-full"
              onClick={handleNext}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CritiquesCard;
