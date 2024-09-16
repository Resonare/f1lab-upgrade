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
        error ? `border-alert` : `border-gray-200`
      } ${
        focused || value ? `pb-10 pt-30` : `py-20`
      } has-[:focus]:${bgColor} relative px-30 text-gray-300 text-xl font-text font-normal leading-7 border-[1px] border-dashed cursor-text transition-all`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex flex-col h-full">
        <div className="absolute left-30 top-0 pointer-events-none h-full">
          <div
            className={`${
              (focused || value) && `pt-10 text-sm leading-tight`
            } pt-20 h-full flex gap-5 pointer-events-none transition-all`}
          >
            <div>
              {placeholder}
              <span className={`${!required && `hidden`} text-alert`}>*</span>
            </div>
            <span className={`${!error && `hidden`} text-alert`}>{error}</span>
          </div>
        </div>
        <input
          className={`${
            error ? `text-alert` : `text-gray-400`
          } h-full pointer-events-none focus:outline-none bg-[transparent]`}
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
