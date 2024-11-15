const Cancel = ({ className, onClick }) => {
  return (
    <div className={`${className} cursor-pointer`} onClick={onClick}>
      <span>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 37 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="delete-1--remove-add-button-buttons-delete-cross-x-mathematics-multiply-math">
            <path
              id="Vector"
              d="M35.1666 2.33301L1.83325 35.6663"
              stroke="#22282E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              id="Vector_2"
              d="M1.83325 2.33301L35.1666 35.6663"
              stroke="#22282E"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </span>
    </div>
  );
};

export default Cancel;
