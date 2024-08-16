const ArrowPrev = ({ className, onClick }) => {
  return (
    <div className={`${className} select-none cursor-pointer transition-all duration-300`} onClick={onClick}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 140 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Vector 12"
          d="M1.75 7C1.19772 7 0.75 7.44772 0.75 8C0.75 8.55228 1.19772 9 1.75 9V7ZM139.707 8.70711C140.098 8.31658 140.098 7.68342 139.707 7.29289L133.343 0.928932C132.953 0.538408 132.319 0.538408 131.929 0.928932C131.538 1.31946 131.538 1.95262 131.929 2.34315L137.586 8L131.929 13.6569C131.538 14.0474 131.538 14.6805 131.929 15.0711C132.319 15.4616 132.953 15.4616 133.343 15.0711L139.707 8.70711ZM1.75 9H139V7H1.75V9Z"
          fill="#22282E"
        />
      </svg>
    </div>
  );
};

export default ArrowPrev;
