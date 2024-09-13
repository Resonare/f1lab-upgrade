const Checkbox = ({ name = "", setValues, value, error }) => {
  const handleClick = (event) => {
    console.log({
      [name]: !value,
    });
    setValues((prevValues) => ({
      ...prevValues,
      [name]: !value,
    }));
  };

  return (
    <div
      className={`${
        error ? `border-alert` : `border-gray-400`
      } flex items-center justify-center cursor-pointer bg-[transparent] rounded-[5px] border-[2px] w-[24px] h-[24px]`}
      onClick={handleClick}
    >
      <input
        name={name}
        className="hidden pointer-events-none"
        type="checkbox"
      />
      <span
        className={`${
          !value && `opacity-0`
        } p-[3px] pointer-events-none transition-all`}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className={`${error ? `stroke-alert` : `stroke-gray-400`}`}
            id="Vector_2"
            d="M14.5 1L5.83333 12L1.5 8.7"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
};

export default Checkbox;
