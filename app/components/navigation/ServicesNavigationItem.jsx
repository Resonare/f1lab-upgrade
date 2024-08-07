import { useEffect, useState } from "react";

const ServicesNavigationItem = ({
  item,
  currentBgState,
  setCurrentBgState,
  setCurrentTextState,
}) => {
  const currentStateChangeHandler = () => {
    setCurrentBgState(item.bgColor);
    setCurrentTextState("text-gray-400");
  };

  const bgColor =
    currentBgState === item.bgColor ? item.bgColor : "bg-gray-400";
  const textColor =
    currentBgState !== item.bgColor ? item.textColor : "text-gray-400";

  return (
    <li key={item.link} className={`${textColor} bg-gray-400`}>
      <div className={`${bgColor}`}>
        <div className={`h-15 rounded-br-full bg-gray-400`}></div>
      </div>
      <button
        onClick={currentStateChangeHandler}
        className={`p-15 w-full text-start rounded-l-2xl ${bgColor} ${
          bgColor !== currentBgState
            ? "hover:bg-opacity-20 hover:bg-gray-100"
            : ""
        }`}
      >
        {item.title}
      </button>
      <div className={`${bgColor}`}>
        <div className={`h-15 rounded-tr-full bg-gray-400`}></div>
      </div>
    </li>
  );
};

export default ServicesNavigationItem;
