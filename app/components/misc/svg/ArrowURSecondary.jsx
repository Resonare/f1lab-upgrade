const ArrowURSecondary = ({ className = "", hoverColor = "" }) => {
  return (
    <span
      className={`group-hover:bg-alert transition-all duration-300 stroke-gray-400 ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Group 4589">
          <path
            id="Vector 2608"
            d="M14 2L2 13.9139"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            id="Rectangle 1723"
            d="M2 2H13.9999V14"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    </span>
  );
};

export default ArrowURSecondary;
