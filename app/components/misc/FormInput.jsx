import { useState, useContext, useRef } from "react";

import { ThemeContext } from "../../store/theme-context";

const FormInput = ({
  className = "",
  name = "",
  placeholder = "Placeholder",
  type = "text",
  error,
  required = false,
  value,
  setValues,
}) => {
  const [focused, setFocused] = useState(false);

  const inputRef = useRef();

  const { bgColor } = useContext(ThemeContext);

  const handleChange = (event) => {
    setValues((prevValue) => ({
      ...prevValue,
      [name]: event.target.value,
    }));
  };

  const handleClick = () => {
    inputRef.current.focus();
  };

  const handleDoubleClick = () => {
    inputRef.current.focus();
    inputRef.current.select();
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleFocusout = () => {
    setFocused(false);
  };

  return (
    <div
      className={`${className} ${value && bgColor} ${
        focused || value ? `pb-10 sm:pt-40 pt-20` : `py-[15px]`
      } has-[:focus]:${bgColor} border-gray-200 border-x border-t relative sm:px-30 px-15 text-gray-300 sm:text-xl font-text sm:font-normal font-light leading-7 border-dashed cursor-text transition-all`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex flex-col h-full">
        <div className="absolute sm:left-30 left-15 top-0 pointer-events-none h-full">
          <div
            className={`${
              (focused || value) && `mt-[-10px] text-sm leading-tight`
            } content-center flex-wrap h-full flex align-center gap-5 pointer-events-none transition-all`}
          >
            <p className={`h-fit`}>
              {placeholder}
              <span className={`${!required && `hidden`} text-alert`}>*</span>
            </p>
            <span className={`${!error && `hidden`} text-alert`}>{error}</span>
          </div>
        </div>
        <input
          className={`${
            error ? `text-alert` : `text-gray-400`
          } pointer-events-none focus:outline-none bg-[transparent]`}
          cols="5"
          rows="10"
          wrap="soft"
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocusout}
          required={required}
          ref={inputRef}
          name={name}
          type={type}
        />
      </div>
    </div>
  );
};

export default FormInput;
