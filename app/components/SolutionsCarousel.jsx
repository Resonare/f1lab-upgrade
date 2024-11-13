import { useRef, useState } from "react";

const SolutionsCarousel = ({ cardsOnPage = 4, className, children }) => {
  const [curPage, setCurPage] = useState(0);

  const pagesAmount = Math.ceil(children.length / cardsOnPage);

  //Function makes counter equal to min if greater than max and equal to max if smaller than min
  const handleOverflow = (counter, min, max) =>
    counter > max ? min : counter < min ? max : counter;

  const handleNext = () => {
    console.log("testr")
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
            i == curPage ? `text-f1-light` : `text-gray-200`
          } flex-1 flex justify-center max-w-[400px] text-[40px] transition-all duration-300 select-none`}
        >
          <p>•</p>
        </div>
      );
    }

    return pageIndicators;
  };

  const getCurContent = () => {
    const curContent = children.slice(
      curPage * cardsOnPage,
      curPage * cardsOnPage + cardsOnPage
    );

    return curContent.map((content, index) => (
      <div key={index} className="basis-0 grow [&>div]:h-full">
        {content}
      </div>
    ));
  };

  let content = getCurContent();

  return (
    <div className={`${className} border-dashed border-gray-300 grid grid-cols-4`}>
      <div
        className={` ${
          content.length != cardsOnPage ? `border-x` : `border-l`
        } col-start-1 col-end-5 border-y border-gray-300 border-dashed bg-gray-400 flex`}
      >
        {content}
      </div>

      <div className="col-start-1 row-start-2 flex pt-10">
        {getPageIndicators()}
      </div>

      <div
        className="col-start-3 py-20 px-5 cursor-pointer hover:pl-0 hover:pr-10 transition-all"
        onClick={handlePrev}
      >
        <svg
          className="max-lg:hidden"
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

        <svg
          className="lg:hidden max-md:hidden"
          width="100%"
          height="100%"
          viewBox="0 0 229 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.2929 19.2929C48.9024 19.6834 48.9024 20.3166 49.2929 20.7071L55.6569 27.0711C56.0474 27.4616 56.6805 27.4616 57.0711 27.0711C57.4616 26.6805 57.4616 26.0474 57.0711 25.6569L51.4142 20L57.0711 14.3431C57.4616 13.9526 57.4616 13.3195 57.0711 12.9289C56.6805 12.5384 56.0474 12.5384 55.6569 12.9289L49.2929 19.2929ZM213.5 21C214.052 21 214.5 20.5523 214.5 20C214.5 19.4477 214.052 19 213.5 19V21ZM50 21H213.5V19H50V21Z"
            fill="#F1F1F1"
          />
        </svg>

        <svg
          className="md:hidden"
          width="100%"
          height="100%"
          viewBox="0 0 165 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49.2929 19.2929C48.9024 19.6834 48.9024 20.3166 49.2929 20.7071L55.6569 27.0711C56.0474 27.4616 56.6805 27.4616 57.0711 27.0711C57.4616 26.6805 57.4616 26.0474 57.0711 25.6569L51.4142 20L57.0711 14.3431C57.4616 13.9526 57.4616 13.3195 57.0711 12.9289C56.6805 12.5384 56.0474 12.5384 55.6569 12.9289L49.2929 19.2929ZM150 21C150.552 21 151 20.5523 151 20C151 19.4477 150.552 19 150 19V21ZM50 21H150V19H50V21Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>

      <div
        className="col-start-4 cursor-pointer hover:pr-0 hover:pl-10 transition-all"
        onClick={handleNext}
      >
        <svg
          className="max-lg:hidden"
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

        <svg
          className="lg:hidden max-md:hidden"
          width="100%"
          height="100%"
          viewBox="0 0 229 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.5 19C14.9477 19 14.5 19.4477 14.5 20C14.5 20.5523 14.9477 21 15.5 21V19ZM179.707 20.7071C180.098 20.3166 180.098 19.6834 179.707 19.2929L173.343 12.9289C172.953 12.5384 172.319 12.5384 171.929 12.9289C171.538 13.3195 171.538 13.9526 171.929 14.3431L177.586 20L171.929 25.6569C171.538 26.0474 171.538 26.6805 171.929 27.0711C172.319 27.4616 172.953 27.4616 173.343 27.0711L179.707 20.7071ZM15.5 21H179V19H15.5V21Z"
            fill="#F1F1F1"
          />
        </svg>

        <svg
          className="md:hidden"
          width="100%"
          height="100%"
          viewBox="0 0 165 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 19C14.4477 19 14 19.4477 14 20C14 20.5523 14.4477 21 15 21V19ZM115.707 20.7071C116.098 20.3166 116.098 19.6834 115.707 19.2929L109.343 12.9289C108.953 12.5384 108.319 12.5384 107.929 12.9289C107.538 13.3195 107.538 13.9526 107.929 14.3431L113.586 20L107.929 25.6569C107.538 26.0474 107.538 26.6805 107.929 27.0711C108.319 27.4616 108.953 27.4616 109.343 27.0711L115.707 20.7071ZM15 21H115V19H15V21Z"
            fill="#F1F1F1"
          />
        </svg>
      </div>
    </div>
  );
};

export default SolutionsCarousel;
