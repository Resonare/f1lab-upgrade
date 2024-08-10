import { useState, useContext, useEffect } from "react";
import ServicesNavigationItem from "./ServicesNavigationItem";
import SecondaryButton from "../buttons/SecondaryButton";

import {
  NavbarContext,
  ServicesDropdownContext,
} from "../../store/navbar-context";

import { navData } from "../../store/data";

const ServicesNavigation = ({ items }) => {
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

  return (
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
      <div
        className={`fixed start-0 -z-10 ${
          navbarContext.showServicesDropdown ? "top-90" : "-top-full"
        } w-full bg-gray-400 flex font-subtitle text-sm transition-all duration-500`}
      >
        <div className="w-1/2 pt-30 pl-120 border-b border-dashed border-gray-200">
          <ul>
            {items.map((item) => (
              <ServicesNavigationItem key={item.link} item={item} />
            ))}
          </ul>
        </div>
        <div
          className={`w-1/2 ${bgColor} py-60 px-30 grid grid-rows-5 justify-start gap-15 border-b border-dashed border-gray-200`}
        >
          {currentService[0].items.map((service) => (
            <SecondaryButton
              key={service.link}
              variant="shaded"
              link
              to={`/services/${service.link}`}
            >
              {service.title}
            </SecondaryButton>
          ))}
        </div>
      </div>
      <button
        className={`fixed start-0 top-0 w-full h-full bg-gray-400 -z-20 cursor-default ${
          navbarContext.showServicesDropdown ? "opacity-0" : "hidden"
        }`}
        onClick={navbarContext.closeServicesDropdownHandler}
      ></button>
    </ServicesDropdownContext.Provider>
  );
};

export default ServicesNavigation;
