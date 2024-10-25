const ArrowNext = ({ className, color = "fill-gray-400", onClick }) => {
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
            className={color}
            id="Vector 12"
            d="M0.792893 7.29289C0.402369 7.68342 0.402369 8.31658 0.792893 8.70711L7.15685 15.0711C7.54738 15.4616 8.18054 15.4616 8.57107 15.0711C8.96159 14.6805 8.96159 14.0474 8.57107 13.6569L2.91421 8L8.57107 2.34315C8.96159 1.95262 8.96159 1.31946 8.57107 0.928932C8.18054 0.538408 7.54738 0.538408 7.15685 0.928932L0.792893 7.29289ZM138.75 9C139.302 9 139.75 8.55228 139.75 8C139.75 7.44772 139.302 7 138.75 7V9ZM1.5 9H138.75V7H1.5V9Z"
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
            className={color}
            d="M432 19C432.552 19 433 19.4477 433 20C433 20.5523 432.552 21 432 21V19ZM9.29291 20.7071C8.90237 20.3166 8.90237 19.6834 9.29291 19.2929L15.6569 12.9289C16.0474 12.5384 16.6805 12.5384 17.0711 12.9289C17.4616 13.3195 17.4616 13.9526 17.0711 14.3431L11.4142 20L17.0711 25.6569C17.4616 26.0474 17.4616 26.6805 17.0711 27.0711C16.6805 27.4616 16.0474 27.4616 15.6569 27.0711L9.29291 20.7071ZM432 21L10 21V19L432 19V21Z"
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
            className={color}
            d="M0.792893 8.20711C0.402369 7.81658 0.402369 7.18342 0.792893 6.79289L7.15685 0.428932C7.54738 0.0384078 8.18054 0.0384078 8.57107 0.428932C8.96159 0.819457 8.96159 1.45262 8.57107 1.84315L2.91421 7.5L8.57107 13.1569C8.96159 13.5474 8.96159 14.1805 8.57107 14.5711C8.18054 14.9616 7.54738 14.9616 7.15685 14.5711L0.792893 8.20711ZM61.5 6.5C62.0523 6.5 62.5 6.94772 62.5 7.5C62.5 8.05228 62.0523 8.5 61.5 8.5V6.5ZM1.5 6.5L61.5 6.5V8.5L1.5 8.5V6.5Z"
          />
        </svg>
      </div>
    </>
  );
};

export default ArrowNext;
