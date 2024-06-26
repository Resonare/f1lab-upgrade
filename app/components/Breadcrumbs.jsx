import { useLocation, Link, NavLink } from '@remix-run/react';
import { Fragment } from 'react/jsx-runtime';

const BreadCrumbs = ({ navs }) => {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');

  const staticLinks = [
    <Link
      className={`${
        segments.filter((s) => s.length > 0).length > 0
          ? 'text-gray-200'
          : 'text-gray-400'
      } text-sm font-text`}
      to='/'
      key='homepage'
    >
      Главная
    </Link>,
  ];

  let url = '';

  const BreadCrumbLinks = segments
    .filter((segment) => segment.length > 0)
    .map((segment, i) => {
      url += `/${segment}`;

      const nav = navs.filter((nav) => nav.link === segment);

      return (
        <Fragment key={i}>
          <div className='px-5 shrink-0'>
            <img src='/images/arrow-right.svg' />
          </div>
          <NavLink
            to={`http:localhost:5173${url}`}
            className={
              segments.filter((s) => s.length > 0).length === i + 1
                ? 'text-gray-400 text-sm font-text'
                : 'text-sm font-text '
            }
          >
            {nav[0]?.title || 'Not found'}
          </NavLink>
        </Fragment>
      );
    });

  return [
    staticLinks,
    ...BreadCrumbLinks,
    ...BreadCrumbLinks,
    ...BreadCrumbLinks,
  ];
};

export default BreadCrumbs;
