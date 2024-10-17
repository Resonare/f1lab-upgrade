import { useRef, useState } from "react";

const SolutionsCarousel = ({cardsOnPage = 4, className, children }) => {
  const [curPage, setCurPage] = useState(0);

  const pagesAmount = Math.ceil(children.length / cardsOnPage);

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () => {
    setCurPage((prevPage) => handleOverflow(prevPage + 1, 0, pagesAmount - 1));
  };

  const handlePrev = () => {
    setCurPage((prevPage) => handleOverflow(prevPage - 1, 0, pagesAmount - 1));
  };

  return (
    <>
      <div className={`${className} bg-gray-400 flex`}>{children}</div>

      <div className="col-start-3">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 413 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.2929 19.2929C48.9024 19.6834 48.9024 20.3166 49.2929 20.7071L55.6569 27.0711C56.0474 27.4616 56.6805 27.4616 57.0711 27.0711C57.4616 26.6805 57.4616 26.0474 57.0711 25.6569L51.4142 20L57.0711 14.3431C57.4616 13.9526 57.4616 13.3195 57.0711 12.9289C56.6805 12.5384 56.0474 12.5384 55.6569 12.9289L49.2929 19.2929ZM397.5 21C398.052 21 398.5 20.5523 398.5 20C398.5 19.4477 398.052 19 397.5 19V21ZM50 21H397.5V19H50V21Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>

      <div className="col-start-4">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 413 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 19C14.9477 19 14.5 19.4477 14.5 20C14.5 20.5523 14.9477 21 15.5 21V19ZM363.707 20.7071C364.098 20.3166 364.098 19.6834 363.707 19.2929L357.343 12.9289C356.953 12.5384 356.319 12.5384 355.929 12.9289C355.538 13.3195 355.538 13.9526 355.929 14.3431L361.586 20L355.929 25.6569C355.538 26.0474 355.538 26.6805 355.929 27.0711C356.319 27.4616 356.953 27.4616 357.343 27.0711L363.707 20.7071ZM15.5 21H363V19H15.5V21Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>
    </>
  );
};

export default SolutionsCarousel;
