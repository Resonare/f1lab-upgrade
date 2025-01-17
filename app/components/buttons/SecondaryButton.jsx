import { NavLink } from "@remix-run/react";
import { useContext } from "react";
import ArrowURSecondary from "../misc/svg/ArrowURSecondary";

import { NavbarContext } from "../../store/navbar-context";
import { LazyImage } from "../LazyImage";

const SecondaryButton = ({
  variant,
  link,
  to,
  onClick,
  row = "",
  col = "",
  customIcon,
  titleClassName = "",
  className = "",
  children,
}) => {
  const { showServicesDropdownHandler } = useContext(NavbarContext);

  const styles = {
    button: "",
    arrow: "",
  };

  switch (variant) {
    case "shaded":
      styles.button =
        "border-y border-gray-200 sm:striped striped-25 hover:bg-none hover:bg-f1-light hover:border-[transparent]";
      styles.arrow = "stroke-gray-400";
      break;
    case "dark-shaded":
      styles.button =
        "text-gray-100 border-y border-gray-300 striped-dark hover:striped hover:bg-gray-100 hover:text-gray-400";
      styles.arrow = "stroke-gray-100 group-hover:stroke-gray-400";
      break;
    case "dark":
      styles.button =
        "text-f1-light bg-gray-400 hover:bg-f1-light hover:text-gray-400";
      styles.arrow = "stroke-gray-400";
      break;
    case "info":
      styles.button =
        "border-gray-300 text-gray-100 bg-gray-400 hover:bg-gray-100 hover:text-gray-400";
      styles.arrow = "stroke-gray-100 group-hover:stroke-gray-400";
      break;
    case "light":
      styles.button =
        "text-gray-400 bg-f1-light hover:bg-gray-400 hover:text-f1-light";
      styles.arrow = "stroke-gray-400 group-hover:stroke-f1-light";
      break;
    case "accent-light":
      styles.button = "text-gray-400 bg-f1-light hover:bg-gray-100";
      styles.arrow = "stroke-gray-400";
      break;
    case "accent-dark":
      styles.button =
        "text-gray-400 bg-f1-light hover:bg-gray-400 hover:text-gray-100";
      styles.arrow = "stroke-gray-400 group-hover:stroke-gray-100";
      break;
    default:
      styles.button =
        "border-y border-gray-200 hover:bg-f1-light hover:border-[transparent]";
  }

  return (
    <>
      {!link && (
        <button
          className={`text-base ${row} ${col} ${styles.button} ${className} group flex justify-between border-dashed h-[52px] pl-20 pr-10 py-5 transition-all duration-500 gap-15 items-center w-full`}
          onClick={onClick}
        >
          <span
            className={`${titleClassName} place-self-center font-expanded font-bold`}
          >
            {children}
          </span>
          <div
            className={`${
              !customIcon &&
              `group-hover:pt-0 group-hover:pb-[14px] group-hover:pr-0 group-hover:pl-[14px]`
            } p-[7px] transition-all duration-300`}
          >
            {customIcon ? (
              <LazyImage src={customIcon} alt="" />
            ) : (
              <ArrowURSecondary className={`${styles.arrow}`} />
            )}
          </div>
        </button>
      )}
      {link && (
        <NavLink
          className={`${className} ${styles.button} min-w-full group flex justify-between border-dashed h-[52px] pl-20 pr-10 py-5 transition-all duration-500`}
          viewTransition
          to={to}
          onClick={showServicesDropdownHandler}
        >
          <span className="place-self-center">{children}</span>
          {customIcon ? (
            <LazyImage src={customIcon} alt="" />
          ) : (
            <ArrowURSecondary className={`${styles.arrow} flex items-center`} />
          )}
        </NavLink>
      )}
    </>
  );
};

export default SecondaryButton;
