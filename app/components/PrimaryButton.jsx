import { useEffect, useRef } from "react";

import styles from "./PrimaryButtom.module.css";

const PrimaryButton = ({ type = "accent", row, col, children }) => {
  //Primary Button types: accent, dark, light
  const filterAccent =
    "brightness(0) saturate(100%) invert(84%) sepia(16%) saturate(4650%) hue-rotate(104deg) brightness(99%) contrast(105%)";
  const filterDark =
    "brightness(0) saturate(100%) invert(8%) sepia(5%) saturate(3618%) hue-rotate(169deg) brightness(90%) contrast(81%)";

  const buttonContainerRef = useRef();

  let buttonClasses = "";

  if (type === "accent") {
    buttonClasses = "bg-f1-light text-gray-400 hover:bg-gray-400 hover:text-f1-light"
  } else if (type === "dark") {
    buttonClasses = "bg-gray-400 text-f1-light hover:bg-f1-light hover:text-gray-400"
  } else if (type === "light") {
    buttonClasses = "bg-gray-100 text-gray-400 hover:bg-f1-light";
  }

  useEffect(() => {
    if (type === "accent") {
      buttonContainerRef.current.style.setProperty(
        "--filter-add",
        filterAccent
      );
      buttonContainerRef.current.style.setProperty(
        "--filter-remove",
        filterDark
      );
    } else if (type === "dark") {
      buttonContainerRef.current.style.setProperty("--filter-add", filterDark);
      buttonContainerRef.current.style.setProperty(
        "--filter-remove",
        filterAccent
      );
    }
  }, []);

  return (
    <div
      ref={buttonContainerRef}
      className={styles.buttonContainer}
      style={{
        "grid-column": `${col + 1}`,
        "grid-row": `${row + 1}`,
      }}
    >
      <button
        className={`${buttonClasses} flex justify-between py-15 pl-30 pr-15 w-full text-xl font-subtitle leading-normal transition-all duration-[400ms]`}
      >
        {children}
        <div className="h-full p-[7px] transition-all duration-500">
          <img
            className="h-full aspect-square"
            src="/images/misc/arrow-icon-gray.svg"
            alt=""
          />
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
