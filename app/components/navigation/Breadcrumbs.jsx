import { useContext } from "react";
import { useLocation, Link, NavLink } from "@remix-run/react";
import { Fragment } from "react/jsx-runtime";

import { NavbarContext } from "../../store/navbar-context";

const BreadCrumbs = ({ navs, inverseColor = false }) => {
  const { closeServicesDropdownHandler } = useContext(NavbarContext);
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  const currentSegment = segments[segments.length - 1];

  const staticLinks = [
    <Link
      className={`${
        segments.filter((s) => s.length > 0).length > 0
          ? "text-gray-200"
          : `${inverseColor ? `text-gray-200` : `text-gray-400`}`
      } text-sm font-text hover:underline hover:underline-offset-4`}
      to="/"
      onClick={closeServicesDropdownHandler}
      key="homepage"
    >
      Главная
    </Link>,
  ];

  let url = "";

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

  const BreadCrumbLinks = segments
    .filter((segment) => segment.length > 0)
    .map((segment, i) => {
      url += `/${segment}`;

      const navItem = findItem(navs, segment);

      return (
        <Fragment key={i}>
          <div className="px-5 shrink-0">
            <img
              className={`${inverseColor && `invert`}`}
              src="/images/arrow-right.svg"
              alt=""
            />
          </div>
          <NavLink
            to={`${segments[0]}${url}`}
            onClick={closeServicesDropdownHandler}
            className={
              currentSegment === navItem.link
                ? `${
                    inverseColor ? `text-gray-200` : `text-gray-400`
                  } text-sm font-text`
                : "text-gray-200 text-sm font-text hover:underline hover:underline-offset-4"
            }
          >
            {navItem.title || "Not found"}
          </NavLink>
        </Fragment>
      );
    });

  return [staticLinks, ...BreadCrumbLinks];
};

export default BreadCrumbs;
