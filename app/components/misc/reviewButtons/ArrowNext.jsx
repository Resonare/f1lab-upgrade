const ArrowNext = ({ className, inverseColor = false, onClick }) => {
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
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
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
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
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
          viewBox="0 0 122 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
            d="M29.7929 25.7071C29.4024 25.3166 29.4024 24.6834 29.7929 24.2929L36.1569 17.9289C36.5474 17.5384 37.1805 17.5384 37.5711 17.9289C37.9616 18.3195 37.9616 18.9526 37.5711 19.3431L31.9142 25L37.5711 30.6569C37.9616 31.0474 37.9616 31.6805 37.5711 32.0711C37.1805 32.4616 36.5474 32.4616 36.1569 32.0711L29.7929 25.7071ZM90.5 24C91.0523 24 91.5 24.4477 91.5 25C91.5 25.5523 91.0523 26 90.5 26V24ZM30.5 24L90.5 24V26L30.5 26V24Z"
            fill="#22282E"
          />
        </svg>
      </div>
    </>
  );
};

export default ArrowNext;
