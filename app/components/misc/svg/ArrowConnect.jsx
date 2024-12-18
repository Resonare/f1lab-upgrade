const ArrowConnect = ({ className, opened }) => {
  return (
    <div
      className={`${className} ${
        !opened && `rotate-180`
      } flex items-center transition-all`}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={`${
            !opened && `group-hover:[d:path('M20,26L20,1')]`
          } transition-all duration-500`}
          d="M20 26 L20 9"
          stroke="#00FFC5"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11.5 20 L20 28.5 L28.5 20"
          stroke="#00FFC5"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ArrowConnect;
