import { NavLink } from '@remix-run/react';

import ShoppingCart from './ShoppingCart';
import BreadCrumbs from './Breadcrumbs';
import { useEffect } from 'react';

const Navbar = ({ navsChangeHandler }) => {
  const navs = [
    { link: '/', title: 'Главная', bgClassName: '' },
    {
      link: 'services',
      title: 'Услуги',
      bgClassName: 'bg-consulting',
      items: [{}],
    },
    {
      link: 'portfolio',
      title: 'Портфолио',
      bgClassName: 'bg-security',
      items: [{}],
    },
    { link: 'experts', title: 'Эксперты', bgClassName: '', items: [{}] },
    { link: 'blog', title: 'Блог', bgClassName: '', items: [{}] },
    { link: 'contacts', title: 'Контакты', bgClassName: '', items: [{}] },
  ];

  useEffect(() => {
    navsChangeHandler(navs);
  }, []);

  return (
    <>
      <div className='w-[100%] h-[90px] px-[120px] bg-opacity-0 border-dashed border-b border-grey justify-between items-center inline-flex'>
        <div className='pr-[15px] border-dashed border-r border-grey h-[100%] items-center flex'>
          <div>
            <img src='/images/logo.svg' />
          </div>
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
        <ShoppingCart />
      </div>
    </>
  );
};

export default Navbar;
