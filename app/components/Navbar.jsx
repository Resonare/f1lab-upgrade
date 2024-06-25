import { NavLink } from '@remix-run/react';

import Logo from './Logo';
import ShoppingCart from './ShoppingCart';
import BreadCrumbs from './Breadcrumbs';
import { useCallback, useEffect } from 'react';

const Navbar = ({ navsChangeHandler }) => {
  const navs = [
    { link: '/', title: 'Главная', bgClassName: '' },
    { link: 'services', title: 'Услуги', bgClassName: 'bg-consulting' },
    { link: 'portfolio', title: 'Портфолио', bgClassName: 'bg-security' },
    { link: 'experts', title: 'Эксперты', bgClassName: '' },
    { link: 'blog', title: 'Блог', bgClassName: '' },
    { link: 'contacts', title: 'Контакты', bgClassName: '' },
  ];

  useEffect(() => {
    navsChangeHandler(navs);
  }, []);

  return (
    <>
      <div className='w-[100%] h-[90px] px-[120px] bg-opacity-0 border-dashed border-b border-grey justify-between items-center inline-flex'>
        <div className='pr-[15px] border-dashed border-r border-grey flex'>
          <Logo />
        </div>
        <div className='px-[30px] grow shrink justify-start items-center inline-flex'>
          <BreadCrumbs navs={navs} />
        </div>
        <div className='px-[60px] justify-end gap-[30px] text-sm font-title flex'>
          {navs.map((nav) => (
            <NavLink to={nav.link} key={nav.title}>
              {nav.title}
            </NavLink>
          ))}
        </div>
        <div className='justify-center items-center border-dashed border-r border-l border-grey flex'>
          <ShoppingCart />
        </div>
      </div>
    </>
  );
};

export default Navbar;
