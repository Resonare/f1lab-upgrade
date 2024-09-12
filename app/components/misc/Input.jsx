import { useState, useContext, useRef } from "react";

import { ThemeContext } from "../../store/theme-context";

const Input = ({
  name = "",
  placeholder = "Placeholder",
  required = false,
}) => {
  const [currentInput, setCurrentInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [focused, setFocused] = useState(false);

  const inputRef = useRef();

  const { bgColor } = useContext(ThemeContext);

  const handleChange = (event) => {
    setCurrentInput(event.target.value);
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
      className={`${currentInput && bgColor} ${
        errorMessage && `border-alert`
      } ${
        focused || currentInput ? `pb-10 pt-30` : `py-20`
      } has-[:focus]:${bgColor} relative px-30 text-gray-300 text-xl font-text font-normal leading-7 border-gray-200 border-[1px] border-dashed cursor-text transition-all`}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    >
      <div className="flex flex-col">
        <div className="absolute left-30 top-0  h-full">
          <div
            className={`${
              (focused || currentInput) && `pt-10 text-sm leading-tight`
            } pt-20 h-full flex gap-5 pointer-events-none transition-all`}
          >
            <div>
              {placeholder}
              <span className={`${!required && `hidden`} text-alert`}>*</span>
            </div>
            <span className={`${!errorMessage && `hidden`} text-alert`}>
              {errorMessage}
            </span>
          </div>
        </div>
        <input
          className={`${
            errorMessage ? `text-alert` : `text-gray-400`
          } pointer-events-none focus:outline-none bg-[transparent]`}
          value={currentInput}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleFocusout}
          required={required}
          ref={inputRef}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;
