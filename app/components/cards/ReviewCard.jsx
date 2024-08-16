import { useState } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import ArrowNext from "../misc/reviewButtons/ArrowNext";
import ArrowPrev from "../misc/reviewButtons/ArrowPrev";

const ReviewCard = ({ row, col, reviewPaths }) => {
  const [curReview, setCurReview] = useState(0);

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () => {
    setCurReview((prevCurReview) =>
      handleOverflow(prevCurReview + 1, 0, reviewPaths.length - 1)
    );
  };

  const handlePrev = () => {
    setCurReview((prevCurReview) =>
      handleOverflow(prevCurReview - 1, 0, reviewPaths.length - 1)
    );
  };

  return (
    <div className={`${row} ${col} h-full gap-60 flex flex-col justify-start`}>
      <div className="border-y-[1px] border-dashed">
        <p className="pb-30 font-bold text-[26px] font-subtitle text-right">
          Что о нас говорят?
        </p>
        <div>
          <SecondaryButton variant="shaded">
            <p className="text-gray-400 text-base font-subtitle">Все отзывы</p>
          </SecondaryButton>
        </div>
        <div className="pr-[1px]">
          <img src={`/images/reviews/${reviewPaths[curReview]}`}></img>
          <div className="flex flex-col gap-10">
            <div className="w-full px-15 justify-center gap-30 items-center inline-flex">
              {reviewPaths.map((path, index) => (
                <div
                  key={index}
                  className={`${
                    index == curReview ? "text-gray-400" : "text-gray-200"
                  } text-[40px] transition-all duration-300 select-none`}
                >
                  •
                </div>
              ))}
            </div>
            <div className="flex gap-15">
              <ArrowNext className={"p-15 pl-40 hover:pl-15 hover:pr-40"} onClick={handleNext} />
              <ArrowPrev className={"p-15 pr-40 hover:pr-15 hover:pl-40"} onClick={handlePrev} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
