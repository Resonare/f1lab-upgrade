import { NavLink } from "@remix-run/react";
import { useContext } from "react";
import ArrowTertiary from "../misc/ArrowTertiary";

import { NavbarContext } from "../../store/navbar-context";

const TertiaryButton = ({ bg, textColor, link, to, onClick, children }) => {
  const { showServicesDropdownHandler } = useContext(NavbarContext);

  const buttonStyle = `flex ${bg} ${
    textColor ? textColor : ""
  } group h-[52px] text-md justify-between pl-20 pr-5 py-5 transition-all duration-500`;

  return (
    <>
      {!link && (
        <button className={`${buttonStyle} min-w-full`} onClick={onClick}>
          <span className="place-self-center">{children}</span>
          <ArrowTertiary color={textColor?.substring(5)} />
        </button>
      )}
      {link && (
        <NavLink
          className={`${buttonStyle} min-w-full`}
          to={to}
          onClick={showServicesDropdownHandler}
        >
          <span className="place-self-center">{children}</span>
          <ArrowTertiary color={textColor?.substring(5)} />
        </NavLink>
      )}
    </>
  );
};

export default TertiaryButton;
