import { useState, useEffect, useContext } from "react";

import SecondaryButton from "../buttons/SecondaryButton";
import TertiaryButton from "../buttons/TertiaryButton";
import BackButton from "../buttons/BackButton";

import {
  NavbarContext,
  ServicesDropdownContext,
} from "../../store/navbar-context";

import { ThemeContext } from "../../store/theme-context";

import { navData } from "../../store/data";

const BurgerDropdown = ({ navs }) => {
  const themeContext = useContext(ThemeContext);
  const navbarContext = useContext(NavbarContext);
  const dropdownContext = useContext(ServicesDropdownContext);

  const [currentState, setCurrentState] = useState(dropdownContext.state);
  const [serviceState, setServiceState] = useState({
    activeEl: "menu",
    bgColor: "bg-gray-400",
    title: navs[1].items[0].title,
    items: navs[1].items[0].items,
  });
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
        <div
          className={`fixed top-70 -z-10 start-0 flex flex-col lg:hidden w-full ${
            navbarContext.showServicesDropdown ? "top-[70px]" : "-top-[1500px]"
          } bg-gray-400 font-subtitle text-sm transition-all duration-500`}
        >
          <div
            className={`${serviceState.activeEl === "menu" ? "" : "hidden"} ${
              themeContext.bgColor
            } flex flex-col gap-15 sm:p-40 p-15 border-b border-gray-200 border-dashed  transition-all duration-500 ease-in-out`}
          >
            <div className="font-text font-bold uppercase text-sm text-gray-300 sm:mb-15">
              Навигация по сайту
            </div>
            {navs
              .filter((nav) => nav.link !== "services")
              .map((nav) => (
                <div key={nav.link}>
                  <SecondaryButton
                    key={nav.link}
                    variant="shaded"
                    borderX
                    link
                    to={nav.link}
                  >
                    {nav.title}
                  </SecondaryButton>
                </div>
              ))}
            {navs
              .filter((nav) => nav.link === "services")
              .map((nav) => (
                <div key={nav.link}>
                  <TertiaryButton
                    key={nav.link}
                    bg="bg-gray-400"
                    textColor={`text-${themeContext.bgColor?.substring(3)}`}
                    onClick={() => {
                      setServiceState({
                        activeEl: "area",
                        bgColor: "bg-gray-400",
                        title: navs[1].items[0].title,
                        items: navs[1].items[0].items,
                      });
                    }}
                  >
                    {nav.title}
                  </TertiaryButton>
                </div>
              ))}
          </div>
          <div
            className={`${
              serviceState.activeEl === "area" ? "" : "hidden"
            } bg-gray-400 flex flex-col gap-15 p-40 transition-all duration-500 ease-in-out`}
          >
            <div className="font-text font-bold uppercase text-sm text-gray-200 mb-15">
              Услуги
            </div>
            {navs
              .filter((nav) => nav.link === "services")[0]
              .items.map((nav) => (
                <div key={nav.link}>
                  <TertiaryButton
                    key={nav.link}
                    bg={nav.bgColor}
                    onClick={() => {
                      setServiceState({
                        activeEl: "services",
                        bgColor: nav.bgColor,
                        title: nav.title,
                        items: nav.items,
                      });
                    }}
                  >
                    {nav.title}
                  </TertiaryButton>
                </div>
              ))}
            <BackButton
              textColor={`text-${themeContext.bgColor?.substring(3)}`}
              borderX
              onClick={() => {
                setServiceState({
                  activeEl: "menu",
                  bgColor: "bg-gray-400",
                  title: navs[1].items[0].title,
                  items: navs[1].items[0].items,
                });
              }}
            />
          </div>
          <div
            className={`${
              serviceState.activeEl === "services" ? "" : "hidden"
            } ${
              serviceState.bgColor
            } flex flex-col gap-15 p-40 border-b border-gray-200 border-dashed  transition-all duration-500 ease-in-out max-h-[calc(100svh-70px)] overflow-y-auto`}
          >
            <div className="font-text font-bold uppercase text-sm text-gray-300 mb-15">
              {serviceState.title}
            </div>
            {serviceState.items.map((nav) => (
              <div key={nav.link}>
                <SecondaryButton
                  key={nav.link}
                  variant="shaded"
                  borderX
                  link
                  to={"services/" + nav.link}
                >
                  {nav.title}
                </SecondaryButton>
              </div>
            ))}
            <BackButton
              onClick={() => {
                setServiceState({
                  activeEl: "area",
                  bgColor: "bg-gray-400",
                  title: navs[1].items[0].title,
                  items: navs[1].items[0].items,
                });
              }}
              borderX
            />
          </div>
        </div>
      </ServicesDropdownContext.Provider>
    </>
  );
};

export default BurgerDropdown;
