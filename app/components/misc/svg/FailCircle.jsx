const FailCircle = ({ className = "" }) => {
  return (
    <div className={className}>
      <svg
        width="101"
        height="100"
        viewBox="0 0 101 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_5646_16738)">
          <path
            d="M50.0208 98.75C76.7724 98.75 98.4582 77.0642 98.4582 50.3125C98.4582 23.5612 76.7724 1.875 50.0208 1.875C23.2695 1.875 1.58325 23.5612 1.58325 50.3125C1.58325 77.0642 23.2695 98.75 50.0208 98.75Z"
            stroke="#F24055"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g clipPath="url(#clip1_5646_16738)">
            <path
              d="M68.1416 33.7832L30.9988 70.9261"
              stroke="#F24055"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M30.9988 33.7832L68.1416 70.9261"
              stroke="#F24055"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_5646_16738">
            <rect
              width="100"
              height="100"
              fill="white"
              transform="translate(0.333252)"
            />
          </clipPath>
          <clipPath id="clip1_5646_16738">
            <rect
              width="40"
              height="40"
              fill="white"
              transform="translate(29.5703 32.3555)"
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default FailCircle;
