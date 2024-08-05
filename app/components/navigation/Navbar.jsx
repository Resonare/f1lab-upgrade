import PropTypes from "prop-types";
import { NavLink } from "@remix-run/react";

import ShoppingCart from "../shoppingCart/ShoppingCart";
import BurgerMenu from "./BurgerMenu";
import BreadCrumbs from "./Breadcrumbs";
import ServicesNavigation from "./ServicesNavigation";
import { useEffect, useState } from "react";

const Navbar = ({ navsChangeHandler, background }) => {
  const navs = [
    { link: "/", title: "Главная", color: "white", items: [] },
    {
      link: "services",
      title: "Услуги",
      color: "consulting",
      items: [
        {
          link: "it-consulting",
          title: "ИТ-консалтинг",
          color: "consulting",
          items: [],
        },
        {
          link: "cloud-management",
          title: "Менеджмент облачной инфраструктуры",
          color: "cloud",
          items: [],
        },
        {
          link: "it-security",
          title: "Информационная безопасность",
          color: "security",
          items: [],
        },
        {
          link: "service-packages",
          title: "Пакеты услуг",
          color: "f1-light",
          items: [],
        },
      ],
    },
    {
      link: "portfolio",
      title: "Портфолио",
      color: "cloud",
      items: [],
    },
    {
      link: "experts",
      title: "Эксперты",
      color: "security",
      items: [],
    },
    { link: "blog", title: "Блог", color: "alert", items: [] },
    {
      link: "contacts",
      title: "Контакты",
      color: "white",
      items: [],
    },
  ];

  useEffect(() => {
    navsChangeHandler(navs);
  }, []);

  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div
        className={`w-[100%] h-90 xl:px-120 lg:px-60 px-40 ${background} border-dashed border-b border-gray-200 justify-between items-center inline-flex`}
      >
        <div className="h-full shrink-0 pr-15 mr-30 border-dashed border-r border-gray-200 items-center flex">
          <img src="/images/logo.svg" alt="" />
        </div>
        <div className="shrink max-lg:min-w-[210px] min-w-[150px] grow justify-start items-center lg:flex-wrap hidden md:flex">
          <BreadCrumbs navs={navs} />
        </div>
        <div className="px-60 justify-end gap-30 text-sm text-gray-400 font-title hidden lg:flex">
          {navs.map((nav) => (
            <>
              {nav.items.length !== 0 && (
                <>
                  <div className="hover:underline hover:underline-offset-4 gap-5 flex">
                    <button onClick={showMenuHandler}>{nav.title}</button>
                    <img
                      src={
                        !showMenu
                          ? "/images/arrow-down.svg"
                          : "/images/arrow-up.svg"
                      }
                      alt=""
                    />
                  </div>
                  <ServicesNavigation showMenu={showMenu} items={nav.items} />
                </>
              )}
              {nav.items.length === 0 && (
                <>
                  <NavLink
                    to={nav.link}
                    key={nav.title}
                    className="hover:underline hover:underline-offset-4"
                  >
                    {nav.title}
                  </NavLink>
                </>
              )}
            </>
          ))}
        </div>
        <div className="h-90 flex justify-end">
          <ShoppingCart />
          <BurgerMenu />
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {
  navsChangeHandler: PropTypes.any,
  background: PropTypes.string,
};

export default Navbar;
