import { useState, useContext, useEffect } from "react";

import {
  NavbarContext,
  ServicesDropdownContext,
} from "../../store/navbar-context";

import { ThemeContext } from "../../store/theme-context";

const BurgerMenu = () => {
  const themeContext = useContext(ThemeContext);
  const image = "/images/burger-menu.svg";

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

  const [buttonBgColor, setButtonBgColor] = useState(themeContext);

  useEffect(() => {
    if (!navbarContext.showServicesDropdown) {
      setButtonBgColor(themeContext);
    }
  }, [navbarContext.showServicesDropdown, themeContext]);

  const showMenuHandler = () => {
    navbarContext.showServicesDropdownHandler();
    if (!navbarContext.showServicesDropdown) {
      setButtonBgColor("bg-f1-light");
    } else {
      setButtonBgColor(themeContext);
    }
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
          className={`max-sm:border-l border-r border-dashed border-gray-200 ${buttonBgColor} hover:bg-f1-light h-[100%] hidden max-lg:flex lg:hidden shrink-0 items-center transition-all ease-in-out duration-300`}
          onClick={showMenuHandler}
        >
          <div className={`px-20`}>
            <img src={image} alt="" />
          </div>
        </button>
      </ServicesDropdownContext.Provider>
    </>
  );
};

export default BurgerMenu;
