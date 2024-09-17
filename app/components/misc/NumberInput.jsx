import { useState } from "react";

const NumberInput = ({ placeholder, min, max, maxLength }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue((prevValue) =>
      (event.target.value + "").length > parseInt(maxLength) ||
      event.target.value < parseFloat(min) ||
      event.target.value > parseFloat(max)
        ? prevValue
        : event.target.value
    );
  };

  return (
    <div className="text-gray-100 font-text leading-relaxed font-light text-xl">
      <input
        className="w-90 h-full outline-none text-center focus:border-gray-200 bg-[transparent] border-dashed border-gray-300 border"
        type="number"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberInput;
