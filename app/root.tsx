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

import { ThemeContext } from "~/store/theme-context";

export function Layout({ children }: { children: React.ReactNode }) {
  const themeContext = useContext(ThemeContext);

  const [bgColor, setBgColor] = useState(themeContext.bgColor);

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
    bgColorChangeHandler(currentItem.bgColor);
  }, [currentItem]);

  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <ThemeContext.Provider value={{ bgColor: bgColor }}>
        <body
          className={`${bgColor} max-w-[1922px] 2xl:border-x 2xl:border-dashed 2xl:border-gray-200 mx-auto transition-full duration-300`}
        >
          <header className="fixed top-0 w-full z-10">
            <Navbar navsChangeHandler={navsChangeHandler} />
          </header>
          <SidebarButtons />
          <div className="pt-70 lg:pt-90">{children}</div>
          <ScrollRestoration />
          <Scripts />
        </body>
      </ThemeContext.Provider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
