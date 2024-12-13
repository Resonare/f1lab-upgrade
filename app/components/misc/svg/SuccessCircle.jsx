const SuccessCircle = ({ className = "" }) => {
  return (
    <div className={className}>
      <svg
        className="max-lg:hidden"
        width="102"
        height="102"
        viewBox="0 0 102 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="add-circle--button-remove-cross-add-buttons-plus-circle-+-mathematics-math">
          <path
            id="Vector"
            d="M51 101C78.6146 101 101 78.6146 101 51C101 23.3858 78.6146 1 51 1C23.3858 1 1 23.3858 1 51C1 78.6146 23.3858 101 51 101Z"
            stroke="#01CA9A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            id="Vector_2"
            d="M70.1952 36.1895L43.8704 69.0954L30.708 59.2236"
            stroke="#01CA9A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      <svg
        className="lg:hidden"
        width="50"
        height="50"
        viewBox="0 0 55 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_3709_13369)">
          <path
            d="M24.8437 49.375C38.2196 49.375 49.0625 38.5321 49.0625 25.1562C49.0625 11.7806 38.2196 0.9375 24.8437 0.9375C11.4681 0.9375 0.625 11.7806 0.625 25.1562C0.625 38.5321 11.4681 49.375 24.8437 49.375Z"
            stroke="#01CA9A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M34.1422 17.9844L21.3912 33.9232L15.0156 29.1416"
            stroke="#01CA9A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_3709_13369">
            <rect width="50" height="50" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default SuccessCircle;
