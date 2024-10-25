import { NavLink } from "@remix-run/react";
import { useContext } from "react";
import ArrowURSecondary from "../misc/svg/ArrowURSecondary";

import { NavbarContext } from "../../store/navbar-context";
import { ThemeContext } from "../../store/theme-context";

const SecondaryButton = ({
  variant,
  borderX,
  link,
  to,
  onClick,
  row = "",
  col = "",
  className = "",
  children,
}) => {
  const { showServicesDropdownHandler } = useContext(NavbarContext);
  const { bgColor } = useContext(ThemeContext);

  let buttonStyle = "";
  let arrowColor = "#22282E";
  let arrowHoverColor = "stroke-gray-400";

  switch (variant) {
    case "shaded":
      buttonStyle = `flex group h-[52px] justify-between border-y ${
        borderX ? "border-x" : ""
      } border-dashed border-gray-200 pl-20 pr-10 py-5 sm:bg-striped bg-striped-25 hover:bg-none hover:bg-f1-light hover:border-none transition-all duration-500`;
      arrowColor = "#22282E";
      arrowHoverColor = "stroke-gray-400";
      break;
    case "dark":
      buttonStyle =
        "flex group h-[52px] justify-between text-f1-light bg-gray-400 pl-20 pr-10 py-5 hover:bg-f1-light hover:text-gray-400 transition-all duration-500";
      arrowColor = "#00FFC5";
      arrowHoverColor = "stroke-gray-400";
      break;
    case "info":
      buttonStyle =
        "flex group h-[52px] justify-between text-f1-light bg-gray-400 pl-20 pr-10 py-5 hover:bg-gray-100 hover:text-gray-400 transition-all duration-500";
      arrowColor = "stroke-gray-100";
      arrowHoverColor = "group-hover:stroke-gray-400";
      break;
    case "light":
      buttonStyle =
        "flex group h-[52px] justify-between text-gray-400 bg-f1-light pl-20 pr-10 py-5 hover:bg-gray-400 hover:text-f1-light transition-all duration-500";
      arrowColor = "stroke-gray-400";
      arrowHoverColor = "group-hover:stroke-f1-light";
      break;
    default:
      buttonStyle =
        "flex group h-[52px] justify-between border-y border-dashed border-gray-200 pl-20 pr-10 py-5 hover:bg-f1-light hover:border-none transition-all duration-500";
  }

  return (
    <>
      {!link && (
        <button
          className={`text-base ${row} ${col} ${buttonStyle} ${className} gap-15 group flex items-center justify-between border-dashed w-full`}
          onClick={onClick}
        >
          <span className="place-self-center font-expanded font-bold">
            {children}
          </span>
          <div className="p-[7px] group-hover:pt-0 group-hover:pb-[14px] group-hover:pr-0 group-hover:pl-[14px] transition-all duration-300">
            <ArrowURSecondary color={arrowColor} hoverColor={arrowHoverColor} />
          </div>
        </button>
      )}
      {link && (
        <NavLink
          className={`${buttonStyle} min-w-full`}
          to={to}
          onClick={showServicesDropdownHandler}
        >
          <span className="place-self-center">{children}</span>
          <ArrowURSecondary
            className="flex items-center"
            color={arrowColor}
            hoverColor={arrowHoverColor}
          />
        </NavLink>
      )}
    </>
  );
};

export default SecondaryButton;
