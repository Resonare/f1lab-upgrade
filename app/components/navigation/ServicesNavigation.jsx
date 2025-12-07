import { useState, useContext, useEffect } from "react";
import ServicesNavigationItem from "./ServicesNavigationItem";
import SecondaryButton from "../buttons/SecondaryButton";

import {
  NavbarContext,
  ServicesDropdownContext,
} from "../../store/navbar-context";

import { navData } from "../../store/data";
import developmentAnimationJson from "../../animations/service-development.json";
import Animation from "../misc/animations/Animation.jsx";

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

  const isDevelopmentService = currentService[0].link === "development";

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
        className={`fixed m-auto left-[50%] 2xl:translate-x-[-50%] hidden lg:flex max-2xl:start-0 max-w-screen-2xl mx-auto w-full h-[500px] -z-10 ${
          navbarContext.showServicesDropdown ? "top-90" : "-top-[1000px]"
        } bg-gray-400 font-subtitle text-sm transition-all duration-500`}
      >
        <div className="flex flex-col w-1/2 striped-dark xl:pl-120 lg:pl-60 border-b border-dashed border-gray-300">
          <div className="bg-gray-400 border-l border-b border-dashed border-gray-300">
            <ul className="pl-60 py-60">
              {items.map((item) => (
                <ServicesNavigationItem key={item.link} item={item} />
              ))}
            </ul>
          </div>
          <div className="flex grow">
            <div className="grow border-dashed border-l border-gray-300"></div>
            <div className="grow border-dashed border-l border-gray-300"></div>
          </div>
        </div>
        <div
          className={`${isDevelopmentService ? "pl-30 mb-[-0.5px]" : "xl:pr-120 lg:pr-60 px-30"} w-1/2 ${bgColor} flex flex-col border-b border-dashed border-gray-200`}
        >
          {isDevelopmentService ? (
            <div className="flex flex-col gap-20 overflow-hidden w-full pb-60">
              <div className="h-full w-[950px] bg-gray-400 overflow-hidden">
                <div className="mt-[-580px]">
                  <Animation data={developmentAnimationJson} />
                </div>
              </div>
              <div className="xl:pr-120 lg:pr-60">
                <SecondaryButton
                  variant="info"
                  link
                  to={`/services/${currentService[0].items[0].link}`}
                >
                  Перейти
                </SecondaryButton>
              </div>

            </div>
          ) : (
            <>
              <div className={`${isDevelopmentService ? "" : "border-dashed border-r"} h-60`}></div>
              <div className="max-w-full grid grid-cols-1 grid-rows-5 justify-start gap-15 border-dashed border-x">
                {isDevelopmentService ? (<div>hello</div>) : null}
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
              <div className="grow border-dashed border-x"></div>
            </>
          )}
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
