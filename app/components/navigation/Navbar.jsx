import { useContext, useEffect, useState } from "react";

import { useLocation } from "@remix-run/react";

import { NavLink } from "@remix-run/react";
import PropTypes from "prop-types";

import useModalStore from "../../store/modal";

import ShoppingCart from "../shoppingCart/ShoppingCart";
import BurgerMenu from "./BurgerMenu";
import BreadCrumbs from "./Breadcrumbs";
import ServicesNavigation from "./ServicesNavigation";
import BurgerDropdown from "./BurgerDropdown";
import Connection from "./Connection";
import Logo from "../misc/svg/Logo";

import { ThemeContext } from "../../store/theme-context";
import { NavbarContext } from "../../store/navbar-context";

import { navData } from "../../store/data";
import SecondaryButton from "../buttons/SecondaryButton";

const Navbar = ({ navsChangeHandler, inverseColor = false }) => {
  const { pathname } = useLocation();
  const segments = pathname.split("/").filter(Boolean);

  inverseColor = segments.length == 0 ? true : inverseColor;

  const { showCallMeBackModal } = useModalStore();
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
    <>
      {inverseColor && (
        <div className="bg-gray-400 absolute top-0 left-0 w-[100svw] lg:h-90 h-[70px]"></div>
      )}

      <NavbarContext.Provider
        value={{
          showServicesDropdown: showServicesDropdown,
          showServicesDropdownHandler: showServicesDropdownHandler,
          closeServicesDropdownHandler: closeServicesDropdownHandler,
        }}
      >
        <nav
          className={`translate-x-[-50%] left-[50%] fixed w-full h-[70px] lg:h-90 xl:px-120 lg:px-60 sm:px-[44.1px] px-15 ${
            !inverseColor && bgColor
          } ${
            inverseColor ? `border-gray-300` : `border-gray-200`
          } border-dashed border-b justify-between items-center inline-flex max-w-screen-2xl mx-auto`}
        >
          <div
            className={`${
              inverseColor ? `border-gray-300` : `border-gray-200`
            } h-full shrink-0 pr-15 mr-30 border-dashed sm:border-r items-center flex`}
          >
            <Logo inverseColor={inverseColor} />
          </div>
          <div className="shrink max-lg:min-w-[210px] min-w-[150px] grow justify-start items-center lg:flex-wrap hidden md:flex">
            <BreadCrumbs navs={navs} inverseColor={inverseColor} />
          </div>
          <div
            className={`${
              inverseColor ? `text-gray-100` : `text-gray-400`
            } xl:pl-60 pl-15 pr-30 justify-end gap-30 text-sm font-expanded font-bold hidden lg:flex`}
          >
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
                        className={`${inverseColor && `invert`}`}
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
                      viewTransition
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
          <div className="h-[70px] flex-wrap lg:h-90 flex content-center justify-end">
            <SecondaryButton
              className="max-lg:hidden text-sm"
              variant="light"
              onClick={showCallMeBackModal}
            >
              Связаться с нами
            </SecondaryButton>
            {/* <ShoppingCart className="max-sm:hidden border-r border-l px-20 lg:px-30" /> */}
            <BurgerMenu inverseColor={inverseColor} />
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
    </>
  );
};

Navbar.propTypes = {
  navsChangeHandler: PropTypes.any,
  background: PropTypes.string,
};

export default Navbar;
