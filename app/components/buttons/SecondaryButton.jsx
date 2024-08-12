import { NavLink } from "@remix-run/react";
import { useContext } from "react";
import ArrowURSecondary from "../misc/ArrowURSecondary";

import { NavbarContext } from "../../store/navbar-context";

const SecondaryButton = ({ variant, borderX, link, to, onClick, children }) => {
  const { showServicesDropdownHandler } = useContext(NavbarContext);

  let buttonStyle = "";
  let arrowColor = "#22282E";
  let arrowHoverColor = "#22282E";

  switch (variant) {
    case "shaded":
      buttonStyle = `flex group h-[52px] text-md justify-between border-y ${
        borderX ? "border-x" : ""
      } border-dashed border-gray-200 pl-20 pr-5 py-5 bg-striped hover:bg-none hover:bg-f1-light hover:border-none transition-all duration-500`;
      arrowColor = "#22282E";
      arrowHoverColor = "#22282E";
      break;
    case "dark":
      buttonStyle =
        "flex group h-[52px] justify-between text-f1-light bg-gray-400 pl-20 pr-5 py-5 hover:bg-f1-light hover:text-gray-400 transition-all duration-500";
      arrowColor = "#00FFC5";
      arrowHoverColor = "#22282E";
      break;
    case "info":
      buttonStyle =
        "flex group h-[52px] justify-between text-f1-light bg-gray-400 pl-20 pr-5 py-5 hover:bg-gray-100 hover:text-gray-400 transition-all duration-500";
      arrowColor = "#00FFC5";
      arrowHoverColor = "#22282E";
      break;
    case "light":
      buttonStyle =
        "flex group h-[52px] justify-between text-gray-400 bg-f1-light pl-20 pr-5 py-5 hover:bg-gray-400 hover:text-f1-light transition-all duration-500";
      arrowColor = "#22282E";
      arrowHoverColor = "#00FFC5";
      break;
    default:
      buttonStyle =
        "flex group h-[52px] justify-between border-y border-dashed border-gray-200 pl-20 pr-5 py-5 hover:bg-f1-light hover:border-none transition-all duration-500";
  }

  return (
    <>
      {!link && (
        <button className={`${buttonStyle} min-w-full`} onClick={onClick}>
          <span className="place-self-center">{children}</span>
          <ArrowURSecondary color={arrowColor} hoverColor={arrowHoverColor} />
        </button>
      )}
      {link && (
        <NavLink
          className={`${buttonStyle} min-w-full`}
          to={to}
          onClick={showServicesDropdownHandler}
        >
          <span className="place-self-center">{children}</span>
          <ArrowURSecondary color={arrowColor} hoverColor={arrowHoverColor} />
        </NavLink>
      )}
    </>
  );
};

export default SecondaryButton;
