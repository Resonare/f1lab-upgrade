import { createContext } from "react";

export const NavbarContext = createContext({
  // services dropdown open/close context
  showServicesDropdown: false,
  showServicesDropdownHandler: () => {
    return false;
  },
  // services dropdown active color context
  //
});
