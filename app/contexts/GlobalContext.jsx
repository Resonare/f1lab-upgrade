import { createContext, useState, useEffect } from "react";

const SCREENS = {
  xl: 1600,
  lg: 1200,
  md: 1024,
  sm: 770,
};

const getCurrentScreen = () => {
  //Returns one of the available screen sizes or "mobile" if smaller
  return (
    Object.keys(SCREENS).find((key) => SCREENS[key] < window.innerWidth) ??
    "mobile"
  );
};

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [screen, setScreen] = useState(null);

  if (typeof document !== "undefined") {
    //If client side
    useEffect(() => {
      const handleResize = () => {
        //Updates only if screen changed
        let currentScreen = getCurrentScreen();
        if (currentScreen != screen) setScreen(currentScreen);
      };

      setScreen(getCurrentScreen());

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  }

  const values = {
    screen: screen,
  };

  return (
    <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
