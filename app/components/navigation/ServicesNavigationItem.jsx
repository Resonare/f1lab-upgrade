import { useContext, useEffect, useState } from "react";

import { ServicesDropdownContext } from "../../store/navbar-context";
import ArrowTertiary from "../misc/svg/ArrowTertiary";

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
      {/*<div className="h-[16px] w-full relative">*/}
      {/*  <div className={`${currentBgColor} absolute h-[16px] w-full transition-all duration-300`}></div>*/}
      {/*  <div className={`absolute h-[16px] w-[calc(100%+1px)] ml-[-1px] rounded-br-full bg-gray-400`}></div>*/}
      {/*</div>*/}
      <div className={`${currentBgColor} h-[16px] transition-all duration-300`}>
        <div className={`h-[calc(100%+2px)] translate-y-[-1px] ml-[-1px] rounded-br-full bg-gray-400`}></div>
      </div>
      <button
        onClick={currentStateChangeHandler}
        className={`flex px-15 py-5 hover:pr-5 justify-between items-center w-full text-start rounded-l-2xl  transition-all duration-300 ${currentBgColor} ${
          currentBgColor !== bgColor
            ? "hover:bg-opacity-20 hover:bg-gray-100"
            : ""
        }`}
      >
        {item.title}
        <ArrowTertiary
          className={currentBgColor === bgColor ? "opacity-0" : ""}
          color={item.textColor.substring(5)}
        />
      </button>
      <div className={`${currentBgColor} h-[16px] transition-all duration-300`}>
        <div className={`h-[calc(100%+2px)] translate-y-[-1px] ml-[-1px] rounded-tr-full bg-gray-400`}></div>
      </div>
    </li>
  );
};

export default ServicesNavigationItem;
