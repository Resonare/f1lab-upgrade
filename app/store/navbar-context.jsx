import { createContext } from "react";

export const NavbarContext = createContext({
  showServicesDropdown: false,
  showServicesDropdownHandler: () => {
    return null;
  },
  closeServicesDropdownHandler: () => {
    return null;
  },
});

export const ServicesDropdownContext = createContext({
  state: "it-consulting",
  stateChangeHandler: () => {
    return null;
  },
  bgColor: "bg-consulting",
  bgColorChangeHandler: () => {
    return null;
  },
  textColor: "text-gray-400",
  textColorChangeHandler: () => {
    return null;
  },
});
