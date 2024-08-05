import { useLocation, Link, NavLink } from "@remix-run/react";
import { Fragment } from "react/jsx-runtime";

const BreadCrumbs = ({ navs }) => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split("/");
  const currentSegment = segments[segments.length - 1];

  const staticLinks = [
    <Link
      className={`${
        segments.filter((s) => s.length > 0).length > 0
          ? "text-gray-200"
          : "text-gray-400"
      } text-sm font-text hover:underline hover:underline-offset-4`}
      to="/"
      key="homepage"
    >
      Главная
    </Link>,
  ];

  let url = "";

  const BreadCrumbLinks = segments
    .filter((segment) => segment.length > 0)
    .map((segment, i) => {
      url += `/${segment}`;

      let navItem = navs.filter((nav) => nav.link === segment);

      if (navItem.length === 0) {
        for (let nav of navs) {
          const itemNav = nav.items.filter((item) => item.link === segment);
          if (itemNav.length > 0) {
            navItem = [...itemNav];
          }
        }
      }

      return (
        <Fragment key={i}>
          <div className="px-5 shrink-0">
            <img src="/images/arrow-right.svg" alt="" />
          </div>
          <NavLink
            to={`${segments[0]}${url}`}
            className={
              currentSegment === navItem[0].link
                ? "text-gray-400 text-sm font-text"
                : "text-gray-200 text-sm font-text hover:underline hover:underline-offset-4"
            }
          >
            {navItem[0]?.title || "Not found"}
          </NavLink>
        </Fragment>
      );
    });

  return [staticLinks, ...BreadCrumbLinks];
};

export default BreadCrumbs;
