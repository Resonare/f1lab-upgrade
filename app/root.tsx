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
import CallMeBackModal from "~/components/modals/callMeBack/CallMeBackModal";
import PlanModal from "~/components/modals/plan/PlanModal";
import BackgroundGrid from "~/layout/BackgroundGrid";
import Footer from "~/components/Footer";

import { CriticalSVGs } from "./components/CriticalSVGs";

import { ThemeContext } from "~/store/theme-context";
import { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [
    {
      rel: "preload",
      href: "/fonts/Bahnschrift.ttf",
      as: "font",
      type: "font/ttf",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/RFDewiExpanded-Bold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
    {
      rel: "preload",
      href: "/fonts/RFDewiExpanded-Ultrabold.woff2",
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous",
    },
  ];
};

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

  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      if (document.fonts) {
        document.fonts.ready.then(() => {
          setFontsLoaded(true);
        });

        // Fallback
        const timeoutId = setTimeout(() => {
          setFontsLoaded(true);
        }, 4000);

        return () => clearTimeout(timeoutId);
      } else {
        setFontsLoaded(true);
      }
    }
  }, []);

  return (
    <html
      lang="ru"
      className={`scroll-smooth ${fontsLoaded ? "fonts-loaded" : ""}`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <CriticalSVGs />
        <Links />
        <style>
          {`
                   .content-wrapper {
                     visibility: hidden;
                   }

                   .fonts-loaded .content-wrapper {
                     visibility: visible;
                     animation: fadeIn 0.2s ease-in;
                   }

                   @keyframes fadeIn {
                     from { opacity: 0; }
                     to { opacity: 1; }
                   }

                   #font-loader {
                     position: fixed;
                     inset: 0;
                     display: flex;
                     align-items: center;
                     justify-content: center;
                   }

                   .fonts-loaded #font-loader {
                     display: none;
                   }
                 `}
        </style>
      </head>
      <ThemeContext.Provider value={{ bgColor: bgColor }}>
        <body
          className={`overflow-x-hidden content-wrapper ${bgColor} max-w-[1921.4px] mx-auto transition-full duration-300 `}
        >
          <header className="fixed top-0 left-0 w-full z-10">
            <Navbar navsChangeHandler={navsChangeHandler} />
          </header>
          <div>{children}</div>
          <PlanModal />
          <CallMeBackModal />
          <BackgroundGrid />
          <ScrollRestoration />
          <Scripts />
          <Footer />
        </body>
      </ThemeContext.Provider>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
