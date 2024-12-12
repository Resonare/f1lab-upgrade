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
          viewBox="0 0 122 51"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${inverseColor ? `fill-gray-100` : `fill-gray-400`}`}
            d="M31.5 26C30.9477 26 30.5 25.5523 30.5 25C30.5 24.4477 30.9477 24 31.5 24V26ZM92.2071 24.2929C92.5976 24.6834 92.5976 25.3166 92.2071 25.7071L85.8431 32.0711C85.4526 32.4616 84.8195 32.4616 84.4289 32.0711C84.0384 31.6805 84.0384 31.0474 84.4289 30.6569L90.0858 25L84.4289 19.3431C84.0384 18.9526 84.0384 18.3195 84.4289 17.9289C84.8195 17.5384 85.4526 17.5384 85.8431 17.9289L92.2071 24.2929ZM31.5 24L91.5 24V26L31.5 26V24Z"
            fill="#22282E"
          />
        </svg>
      </div>
    </>
  );
};

export default ArrowPrev;
