const ArrowPrev = ({ className, inverseColor = false, onClick }) => {
  return (
    <>
      <div
        className={`${className} max-lg:hidden select-none cursor-pointer transition-all duration-300`}
        onClick={onClick}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 140 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 12"
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
            d="M1.75 7C1.19772 7 0.75 7.44772 0.75 8C0.75 8.55228 1.19772 9 1.75 9V7ZM139.707 8.70711C140.098 8.31658 140.098 7.68342 139.707 7.29289L133.343 0.928932C132.953 0.538408 132.319 0.538408 131.929 0.928932C131.538 1.31946 131.538 1.95262 131.929 2.34315L137.586 8L131.929 13.6569C131.538 14.0474 131.538 14.6805 131.929 15.0711C132.319 15.4616 132.953 15.4616 133.343 15.0711L139.707 8.70711ZM1.75 9H139V7H1.75V9Z"
          />
        </svg>
      </div>

      <div
        className={`${className} lg:hidden max-sm:hidden select-none cursor-pointer transition-all duration-300`}
        onClick={onClick}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 442 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
            d="M10 21C9.44772 21 9 20.5523 9 20C9 19.4477 9.44772 19 10 19V21ZM432.707 19.2929C433.098 19.6834 433.098 20.3166 432.707 20.7071L426.343 27.0711C425.953 27.4616 425.319 27.4616 424.929 27.0711C424.538 26.6805 424.538 26.0474 424.929 25.6569L430.586 20L424.929 14.3431C424.538 13.9526 424.538 13.3195 424.929 12.9289C425.319 12.5384 425.953 12.5384 426.343 12.9289L432.707 19.2929ZM10 19L432 19V21L10 21V19Z"
          />
        </svg>
      </div>

      <div
        className={`${className} sm:hidden select-none cursor-pointer transition-all duration-300`}
        onClick={onClick}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 63 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector 12"
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
            d="M1.5 8.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5V8.5ZM62.2071 6.79289C62.5976 7.18342 62.5976 7.81658 62.2071 8.20711L55.8431 14.5711C55.4526 14.9616 54.8195 14.9616 54.4289 14.5711C54.0384 14.1805 54.0384 13.5474 54.4289 13.1569L60.0858 7.5L54.4289 1.84315C54.0384 1.45262 54.0384 0.819457 54.4289 0.428932C54.8195 0.0384078 55.4526 0.0384078 55.8431 0.428932L62.2071 6.79289ZM1.5 6.5L61.5 6.5V8.5L1.5 8.5V6.5Z"
          />
        </svg>
      </div>
    </>
  );
};

export default ArrowPrev;
