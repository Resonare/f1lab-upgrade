import { useContext, useEffect, useState } from "react";

import { NavLink } from "@remix-run/react";
import PropTypes from "prop-types";

import ShoppingCart from "../shoppingCart/ShoppingCart";
import BurgerMenu from "./BurgerMenu";
import BreadCrumbs from "./Breadcrumbs";
import ServicesNavigation from "./ServicesNavigation";
import BurgerDropdown from "./BurgerDropdown";
import Connection from "./Connection";

import { ThemeContext } from "../../store/theme-context";
import { NavbarContext } from "../../store/navbar-context";

import { navData } from "../../store/data";

const Navbar = ({ navsChangeHandler }) => {
  const { bgColor } = useContext(ThemeContext);

  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const showServicesDropdownHandler = () => {
    setShowServicesDropdown(!showServicesDropdown);
  };

  const closeServicesDropdownHandler = () => {
    setShowServicesDropdown(false);
  };

  const navs = navData;

  useEffect(() => {
    navsChangeHandler(navs);
  });

  return (
    <NavbarContext.Provider
      value={{
        showServicesDropdown: showServicesDropdown,
        showServicesDropdownHandler: showServicesDropdownHandler,
        closeServicesDropdownHandler: closeServicesDropdownHandler,
      }}
    >
      <nav
        className={`fixed w-full h-[70px] lg:h-90 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 ${bgColor} border-dashed border-b border-gray-200 justify-between items-center inline-flex max-w-screen-2xl mx-auto`}
      >
        <div className="h-full shrink-0 pr-15 mr-30 border-dashed sm:border-r border-gray-200 items-center flex">
          <img className="max-sm:h-[65%]" src="/images/logo.svg" alt="" />
        </div>
        <div className="shrink max-lg:min-w-[210px] min-w-[150px] grow justify-start items-center lg:flex-wrap hidden md:flex">
          <BreadCrumbs navs={navs} />
        </div>
        <div className="px-60 justify-end gap-30 text-sm text-gray-400 font-title hidden lg:flex">
          {navs.map((nav) => (
            <div key={nav.link}>
              {nav.items.length !== 0 && (
                <>
                  <button
                    onClick={showServicesDropdownHandler}
                    className="flex justify-between items-center gap-5 hover:underline hover:underline-offset-4 "
                  >
                    {nav.title}
                    <img
                      src={
                        !showServicesDropdown
                          ? "/images/arrow-down.svg"
                          : "/images/arrow-up.svg"
                      }
                      alt=""
                    />
                  </button>
                </>
              )}
              {nav.items.length === 0 && (
                <>
                  <NavLink
                    to={nav.link}
                    key={nav.title}
                    className="hover:underline hover:underline-offset-4"
                    onClick={() => {
                      setShowServicesDropdown(false);
                    }}
                  >
                    {nav.title}
                  </NavLink>
                </>
              )}
            </div>
          ))}
        </div>
        <div className="h-[70px] lg:h-90 flex justify-end">
          <ShoppingCart className="max-sm:hidden border-r border-l px-20 lg:px-30" />
          <BurgerMenu />
        </div>
      </nav>
      {navs.map((nav) => (
        <div key={nav.link}>
          {nav.items.length !== 0 && <ServicesNavigation items={nav.items} />}
        </div>
      ))}
      <BurgerDropdown navs={navs} />
      <Connection />
    </NavbarContext.Provider>
  );
};

Navbar.propTypes = {
  navsChangeHandler: PropTypes.any,
  background: PropTypes.string,
};

export default Navbar;
