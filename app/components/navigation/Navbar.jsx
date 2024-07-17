import PropTypes from "prop-types";
import { NavLink } from "@remix-run/react";

import ShoppingCart from "../shoppingCart/ShoppingCart";
import BurgerMenu from "./BurgerMenu";
import BreadCrumbs from "./Breadcrumbs";
import { useEffect } from "react";

const Navbar = ({ navsChangeHandler, background }) => {
  const navs = [
    { link: "/", title: "Главная", bgClassName: "bg-white" },
    {
      link: "services",
      title: "Услуги",
      bgClassName: "bg-consulting",
      items: [{}],
    },
    {
      link: "portfolio",
      title: "Портфолио",
      bgClassName: "bg-cloud",
      items: [{}],
    },
    {
      link: "experts",
      title: "Эксперты",
      bgClassName: "bg-security",
      items: [{}],
    },
    { link: "blog", title: "Блог", bgClassName: "bg-alert", items: [{}] },
    {
      link: "contacts",
      title: "Контакты",
      bgClassName: "bg-white",
      items: [{}],
    },
  ];

  useEffect(() => {
    navsChangeHandler(navs);
  }, []);

  return (
    <>
      <div
        className={`w-[100%] h-90 xl:px-120 lg:px-60 md:px-40 px-15 ${background} border-dashed border-b border-gray-200 justify-between items-center inline-flex`}
      >
        <div className="h-full shrink-0 pr-15 mr-30 border-dashed border-r border-gray-200 items-center flex">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="shrink min-w-[140px] grow justify-start items-center lg:flex-wrap hidden md:flex">
          <BreadCrumbs navs={navs} />
        </div>
        <div className="px-60 justify-end gap-30 text-sm text-gray-400 font-title hidden lg:flex">
          {navs.map((nav) => (
            <NavLink to={nav.link} key={nav.title}>
              {nav.title}
            </NavLink>
          ))}
        </div>
        <ShoppingCart />
        <BurgerMenu />
      </div>
    </>
  );
};

Navbar.propTypes = {
  navsChangeHandler: PropTypes.any,
  background: PropTypes.string,
};

export default Navbar;
