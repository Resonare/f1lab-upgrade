import { useState, useEffect, useContext } from "react";

import ServicesNavigationItem from "./ServicesNavigationItem";
import SecondaryButton from "../buttons/SecondaryButton";

import {
  NavbarContext,
  ServicesDropdownContext,
} from "../../store/navbar-context";

import { ThemeContext } from "../../store/theme-context";

import { navData } from "../../store/data";

const BurgerMenu = ({ navs }) => {
  const [image, setImage] = useState("images/burger-menu.svg");

  const themeContext = useContext(ThemeContext);
  const navbarContext = useContext(NavbarContext);
  const dropdownContext = useContext(ServicesDropdownContext);

  const [currentState, setCurrentState] = useState(dropdownContext.state);
  const [bgColor, setBgColor] = useState(dropdownContext.bgColor);
  const [textColor, setTextColor] = useState(dropdownContext.textColor);

  const currentStateChangeHandler = (state) => {
    setCurrentState(state);
  };
  const bgColorChangeHandler = (color) => {
    setBgColor(color);
  };
  const textColorChangeHandler = (color) => {
    setTextColor(color);
  };

  const services = navData.filter((item) => item.link === "services");
  const [currentService, setCurrentService] = useState(
    services[0].items.filter((service) => service.link === currentState)
  );

  useEffect(() => {
    setCurrentService(
      services[0].items.filter((service) => service.link === currentState)
    );
  }, [currentState]);

  const showMenuHandler = () => {
    //  image === "images/burger-menu.svg"
    //  ? setImage("images/burger-menu-close.svg")
    //  : setImage("images/burger-menu.svg");

    navbarContext.showServicesDropdownHandler();
  };
  return (
    <>
      <ServicesDropdownContext.Provider
        value={{
          state: currentState,
          stateChangeHandler: currentStateChangeHandler,
          bgColor: bgColor,
          bgColorChangeHandler: bgColorChangeHandler,
          textColor: textColor,
          textColorChangeHandler: textColorChangeHandler,
        }}
      >
        <button
          className="border-dashed border-r hover:bg-f1-light border-gray-200 h-[100%] hidden max-lg:flex lg:hidden shrink-0 items-center"
          onClick={showMenuHandler}
        >
          <div className="px-20">
            <img src={image} alt="" />
          </div>
        </button>
        <div
          className={`fixed start-0 grid grid-rows-2 grid-cols-1 lg:hidden w-full h-[calc(100svh-70px)] ${
            navbarContext.showServicesDropdown ? "top-[70px]" : "-top-[1200px]"
          } bg-gray-400 font-subtitle text-sm transition-all duration-500`}
        >
          <div className={`${themeContext.bgColor} flex flex-col gap-15 p-40`}>
            {navs.map((nav) => (
              <>
                {nav.link !== "services" && (
                  <SecondaryButton
                    key={nav.link}
                    variant="shaded"
                    link
                    to={nav.link}
                  >
                    {nav.title}
                  </SecondaryButton>
                )}
              </>
            ))}
          </div>
        </div>
      </ServicesDropdownContext.Provider>
    </>
  );
};

export default BurgerMenu;
