import { useState, useContext } from "react";
import ServicesNavigationItem from "./ServicesNavigationItem";
import SecondaryButton from "../buttons/SecondaryButton";

import { NavbarContext } from "../../store/navbar-context";
import { navData } from "../../store/data";

const ServicesNavigation = ({ items }) => {
  const [currentBgState, setCurrentBgState] = useState("bg-consulting");
  const [currentTextState, setCurrentTextState] = useState("text-gray-400");

  const navbarContext = useContext(NavbarContext);

  const services = navData.filter((item) => item.link === "services");

  const [serviceItems, setServiceItems] = useState(services[0].items);

  return (
    <>
      <div
        className={`fixed start-0 -z-10 ${
          navbarContext.showServicesDropdown ? "top-90" : "-top-full"
        } w-full bg-gray-400 flex font-subtitle text-sm transition-all duration-500`}
      >
        <div className="w-1/2 pt-30 pl-120 border-b border-dashed border-gray-200">
          <ul>
            {items.map((item) => (
              <ServicesNavigationItem
                key={item.link}
                item={item}
                currentBgState={currentBgState}
                setCurrentBgState={setCurrentBgState}
                currentTextState={currentTextState}
                setCurrentTextState={setCurrentTextState}
              />
            ))}
          </ul>
        </div>
        <div
          className={`w-1/2 ${currentBgState} py-60 px-30 grid grid-rows-5 justify-start gap-15 border-b border-dashed border-gray-200`}
        >
          {serviceItems[0].items.map((service) => (
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
    </>
  );
};

export default ServicesNavigation;
