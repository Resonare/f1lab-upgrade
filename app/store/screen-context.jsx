import { createContext } from "react";

export const ScreenContext = createContext({
  screen: "md",
});

// const GlobalProvider = ({ children }) => {
//   const [screen, setScreen] = useState(null);

//   if (typeof document !== "undefined") {
//     //If client side
//     useEffect(() => {
//       const handleResize = () => {
//         //Updates only if screen changed
//         let currentScreen = getCurrentScreen();
//         if (currentScreen != screen) setScreen(currentScreen);
//       };

//       setScreen(getCurrentScreen());

//       window.addEventListener("resize", handleResize);
//       return () => window.removeEventListener("resize", handleResize);
//     }, []);
//   }

//   const values = ;

//   return (
//     <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>
//   );
// };

// export { GlobalContext, GlobalProvider };
