import { useState, useContext, useEffect } from "react";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from "@remix-run/react";
import "./tailwind.css";

import Navbar from "~/components/navigation/Navbar";
import SidebarButtons from "~/components/navigation/SidebarButtons";
import BackgroundGridV2 from "~/components/BackgroundGridV2";

import { ThemeContext } from "~/store/theme-context";
import { ScreenContext } from "~/store/screen-context";

export function Layout({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);
  const screenContext = useContext(ScreenContext);

  const [bgColor, setBgColor] = useState(themeContext.bgColor);
  const [screen, setScreen] = useState(screenContext.screen);

  const bgColorChangeHandler = (color: string) => {
    setBgColor(color);
  };

  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  const currentSegment = segments[segments.length - 1];

  const [navs, setNavs] = useState([{}]);

  const navsChangeHandler = (
    updatedNavs: {
      link: string;
      title: "string";
      bgColor: string;
      textColor: string;
      items: Array<any>;
    }[]
  ) => {
    setNavs(updatedNavs);
  };

  const SCREENS: { [key: string]: number } = {
    xl: 1600,
    lg: 1200,
    md: 1024,
    sm: 770,
  };
  
  const getCurrentScreen = (): string => {
    //Returns one of the available screen sizes or "mobile" if smaller
    return (
      Object.keys(SCREENS).find((key) => SCREENS[key] < window.innerWidth) ??
      "mobile"
    );
  };

  const findItem = (items, targetLink) => {
    // Inner recursive function to search within nested structures
    function recursiveSearch(items) {
      for (const item of items) {
        if (item.link === targetLink) {
          return item;
        }
        if (item.items && item.items.length > 0) {
          const foundInChildren = recursiveSearch(item.items);
          if (foundInChildren) {
            return foundInChildren;
          }
        }
      }
      return null; // Return null if not found in the current level
    }

    const foundItem = recursiveSearch(items);
    return foundItem || items[0]; // Return the found item or the first top-level item
  };

  const currentItem = findItem(navs, currentSegment);

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

  useEffect(() => {
    bgColorChangeHandler(currentItem.bgColor);
  }, [currentItem]);

  console.log(screen);

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeContext.Provider value={{ bgColor: bgColor }}>
        <ScreenContext.Provider value={{screen: screen}}>
          <body
            className={`${bgColor} max-w-[1923px] 2xl:border-x 2xl:border-dashed 2xl:border-gray-200 mx-auto transition-full duration-300`}
          >
            <header className="fixed top-0 w-full z-10">
              <Navbar navsChangeHandler={navsChangeHandler} />
            </header>
            <div>
              {children}
            </div>
            <SidebarButtons />
            <BackgroundGridV2 />
            <ScrollRestoration />
            <Scripts />
          </body>
        </ScreenContext.Provider>
      </ThemeContext.Provider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
