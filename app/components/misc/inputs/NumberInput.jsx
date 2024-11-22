const NumberInput = ({
  value,
  setValues,
  error,
  name,
  placeholder,
  min,
  max,
  maxLength,
}) => {
  const handleChange = (event) => {
    //Validation
    setValues((prevValues) =>
      event.target.value.length > parseInt(maxLength) ||
      parseFloat(event.target.value) < parseFloat(min) ||
      parseFloat(event.target.value) > parseFloat(max)
        ? prevValues
        : { ...prevValues, [name]: event.target.value }
    );

    if (event.target.value.length > parseInt(maxLength) - 1) {
      event.target.parentNode?.nextSibling?.nextSibling
        .querySelector("input")
        .focus();
    } else if (event.target.value.length == 0) {
      event.target.parentNode?.previousSibling?.previousSibling
        .querySelector("input")
        .focus();
    }
  };

  return (
    <div className="flex text-gray-100 font-text leading-relaxed font-light text-xl border-gray-300 focus:border-gray-200">
      <input
        className={`${
          error && `text-alert placeholder:text-alert border-alert`
        } w-90 h-full outline-none text-center bg-[transparent] border-dashed placeholder:text-gray-300 focus:placeholder:text-[transparent] border`}
        type="number"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
      <div
        className={`${
          error ? `bg-alert` : `hidden`
        } w-fit max-w-200 px-15 py-[4px] text-[16px] font-text font-light flex items-center`}
      >
        {error}
      </div>
    </div>
  );
};

export default NumberInput;
