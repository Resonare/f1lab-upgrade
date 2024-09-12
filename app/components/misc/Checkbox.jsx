import { useState } from "react";

const Checkbox = ({ name = "", id = "" }) => {
  const [checked, setChecked] = useState(false);

  const handleClick = () => {
    console.log("test")
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <div
      className="flex items-center justify-center cursor-pointer bg-[transparent] rounded-[5px] border-[2px] border-gray-400 w-[24px] h-[24px]"
      onClick={handleClick}
    >
      <input
        name={name}
        id={id}
        className="hidden pointer-events-none"
        type="checkbox"
        onChange={handleClick}
      />
      <span className={`${!checked && `hidden`} p-[3px] pointer-events-none`}>
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Vector_2"
            d="M14.5 1L5.83333 12L1.5 8.7"
            stroke="#22282E"
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
