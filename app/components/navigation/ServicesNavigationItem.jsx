import { useEffect, useState } from "react";

const ServicesNavigationItem = ({ item, currentState, setCurrentState }) => {
  const currentStateChangeHandler = () => {
    setCurrentState(item.color);
  };

  const bgColor = currentState === item.color ? item.color : "gray-400";
  const textColor = currentState !== item.color ? item.color : "gray-400";

  return (
    <li key={item.link} className={`text-${textColor} w-full `}>
      <button
        onClick={currentStateChangeHandler}
        className={`p-15 bg-${bgColor} w-full text-start rounded-l-2xl`}
      >
        {item.title}
      </button>
      <div className={`bg-${bgColor}`}>
        <div className={`h-30 rounded-tr-3xl bg-gray-400`}></div>
      </div>
    </li>
  );
};

export default ServicesNavigationItem;
