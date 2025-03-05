import { useState, useContext, useRef } from "react";

import { ThemeContext } from "../../../store/theme-context";

const FormInput = ({
  className = "",
  name = "",
  placeholder = "Placeholder",
  type = "text",
  error,
  required = false,
  value,
  setValues,
  inverseColor = false,
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

  const handleClick = (event) => {
    event.preventDefault();

    inputRef.current.focus();
  };

  const handleDoubleClick = (event) => {
    event.preventDefault();

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
    <button
      className={`${className} ${
        value && (inverseColor ? `bg-gray-400` : bgColor)
      } ${inverseColor ? `border-gray-300` : `border-gray-200`} ${
        focused || value
          ? `pb-10 lg:pt-40 pt-20 ${inverseColor ? `bg-gray-400` : bgColor}`
          : `lg:py-[25px] py-[15px]`
      } overflow-hidden border-x border-t relative sm:px-30 px-15 text-gray-300 sm:text-xl font-text sm:font-normal font-light leading-7 border-dashed cursor-text transition-all`}
      tabIndex="-1"
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex flex-col h-full">
        <div className="absolute sm:left-30 left-15 top-0 pointer-events-none h-full">
          <div
            className={`${
              (focused || value) &&
              `mt-[-10px] sm:text-sm text-[10px] leading-tight`
            } ${
              type == `textarea`
                ? focused || value
                  ? `pb-10 lg:pt-30 pt-20`
                  : `lg:py-[25px] py-[15px]`
                : `content-center`
            } flex-wrap h-full flex align-center gap-5 pointer-events-none transition-all`}
          >
            <p className="text-wrap text-left leading-[20px]">
              {placeholder}
              <span className={`${!required && `hidden`} text-alert`}>*</span>
              <span className={`${!error && `hidden`} ml-[8px] text-alert`}>
                {error}
              </span>
            </p>
          </div>
        </div>
        {type == "textarea" ? (
          <textarea
            className={`${
              error
                ? `text-alert`
                : inverseColor
                ? `text-gray-100`
                : `text-gray-400`
            } resize-none focus:outline-none bg-[transparent]`}
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
          />
        ) : (
          <input
            className={`${
              error
                ? `text-alert`
                : inverseColor
                ? `text-gray-100`
                : `text-gray-400`
            } pointer-events-none focus:outline-none bg-[transparent]`}
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
        )}
      </div>
    </button>
  );
};

export default FormInput;
