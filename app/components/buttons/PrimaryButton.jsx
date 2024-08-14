import { useEffect, useRef } from "react";

import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({
  row,
  col,
  type = "accent",
  children,
  ...otherAttributes
}) => {
  //Primary Button types: accent, dark, light

  //Filter property values depending on button type
  const filterForAccent =
    "brightness(0) saturate(100%) invert(84%) sepia(16%) saturate(4650%) hue-rotate(104deg) brightness(99%) contrast(105%)";
  const filterForDark =
    "brightness(0) saturate(100%) invert(8%) sepia(5%) saturate(3618%) hue-rotate(169deg) brightness(90%) contrast(81%)";

  //Ref for css variables
  const buttonContainerRef = useRef();

  //Computing button color depending on type
  let buttonColorClasses = "";
  if (type === "accent") {
    buttonColorClasses =
      "bg-f1-light text-gray-400 hover:bg-gray-400 hover:text-f1-light";
  } else if (type === "dark") {
    buttonColorClasses =
      "bg-gray-400 text-f1-light hover:bg-f1-light hover:text-gray-400";
  } else if (type === "light") {
    buttonColorClasses = "bg-gray-100 text-gray-400 hover:bg-f1-light";
  }

  useEffect(() => {
    //Adding css variables for onHover event
    if (type === "accent") {
      buttonContainerRef.current.style.setProperty(
        "--filter-add",
        filterForAccent
      );
    } else if (type === "dark") {
      buttonContainerRef.current.style.setProperty(
        "--filter-add",
        filterForDark
      );

      buttonContainerRef.current.style.setProperty(
        "--filter-remove",
        filterForAccent
      );
    }
  }, []);

  return (
    <div
      {...otherAttributes}
      ref={buttonContainerRef}
      className={`${styles.buttonContainer} ${
        otherAttributes.className ?? ""
      } ${row} ${col} lg:pt-0 pt-30`}
    >
      <button
        className={`${buttonColorClasses} flex justify-between py-15 pl-30 pr-15 w-full text-xl font-subtitle leading-normal transition-all duration-[400ms]`}
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
