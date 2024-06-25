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
          ? 'text-grey '
          : 'text-black'
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
          <div className='px-[5px]'>
            <svg
              width='12'
              height='8'
              viewBox='0 0 12 8'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.1543 3.5C0.878155 3.5 0.654297 3.72386 0.654297 4C0.654297 4.27614 0.878154 4.5 1.1543 4.5L1.1543 3.5ZM11.5079 4.35355C11.7031 4.15829 11.7031 3.84171 11.5079 3.64645L8.32587 0.464467C8.13061 0.269205 7.81403 0.269204 7.61876 0.464467C7.4235 0.659729 7.4235 0.976311 7.61876 1.17157L10.4472 4L7.61876 6.82843C7.4235 7.02369 7.4235 7.34027 7.61876 7.53553C7.81402 7.7308 8.13061 7.7308 8.32587 7.53553L11.5079 4.35355ZM1.1543 4.5L11.1543 4.5L11.1543 3.5L1.1543 3.5L1.1543 4.5Z'
                fill='#BDBDBD'
              />
            </svg>
          </div>
          <NavLink
            to={`http:localhost:5173${url}`}
            className={
              segments.filter((s) => s.length > 0).length === i + 1
                ? 'text-black text-sm font-text'
                : 'text-sm font-text '
            }
          >
            {nav[0]?.title || 'Not found'}
          </NavLink>
        </Fragment>
      );
    });

  return [staticLinks, ...BreadCrumbLinks];
};

export default BreadCrumbs;
