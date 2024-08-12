import { NavLink } from "@remix-run/react";
import { useContext } from "react";
import ArrowBack from "../misc/ArrowBack";

import { NavbarContext } from "../../store/navbar-context";

const BackButton = ({ bg, borderX, textColor, link, to, onClick }) => {
  const { showServicesDropdownHandler } = useContext(NavbarContext);

  const buttonStyle = `flex group ${bg} ${
    textColor ? textColor : ""
  } h-[52px] text-md justify-between border-y ${
    borderX ? "border-x" : ""
  } border-dashed border-gray-200 pl-10 pr-20 py-5 bg-striped transition-all duration-500`;

  return (
    <>
      {!link && (
        <button className={`${buttonStyle} min-w-full`} onClick={onClick}>
          <ArrowBack color={textColor?.substring(5)} />
          <span className="place-self-center">Назад</span>
        </button>
      )}
      {link && (
        <NavLink
          className={`${buttonStyle} min-w-full`}
          to={to}
          onClick={showServicesDropdownHandler}
        >
          <ArrowBack color={textColor?.substring(5)} />
          <span className="place-self-center">Назад</span>
        </NavLink>
      )}
    </>
  );
};

export default BackButton;
