import { useContext, useEffect, useState } from "react";

import { ServicesDropdownContext } from "../../store/navbar-context";

const ServicesNavigationItem = ({ item }) => {
  const {
    bgColor,
    stateChangeHandler,
    bgColorChangeHandler,
    textColorChangeHandler,
  } = useContext(ServicesDropdownContext);

  const currentStateChangeHandler = () => {
    stateChangeHandler(item.link);
    bgColorChangeHandler(item.bgColor);
    textColorChangeHandler("text-gray-400");
  };

  const currentBgColor =
    bgColor === item.bgColor ? item.bgColor : "bg-gray-400";
  const currentTextColor =
    bgColor !== item.bgColor ? item.textColor : "text-gray-400";

  return (
    <li key={item.link} className={`${currentTextColor} bg-gray-400`}>
      <div className={`${currentBgColor}`}>
        <div className={`h-15 rounded-br-full bg-gray-400`}></div>
      </div>
      <button
        onClick={currentStateChangeHandler}
        className={`p-15 w-full text-start rounded-l-2xl ${currentBgColor} ${
          currentBgColor !== bgColor
            ? "hover:bg-opacity-20 hover:bg-gray-100"
            : ""
        }`}
      >
        {item.title}
      </button>
      <div className={`${currentBgColor}`}>
        <div className={`h-15 rounded-tr-full bg-gray-400`}></div>
      </div>
    </li>
  );
};

export default ServicesNavigationItem;
