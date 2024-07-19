import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';

import './tailwind.css';

import { useState } from 'react';

import Navbar from '~/components/navigation/Navbar';
import SidebarButtons from '~/components/navigation/SidebarButtons';

import { GlobalProvider } from "~/components/GlobalContext";

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');
  const currentSegment = segments[segments.length - 1];

  const [navs, setNavs] = useState([
    { link: '/', title: 'Главная', bgClassName: 'bg-white', items: [{}] },
  ]);

  const navsChangeHandler = (
    updatedNavs: {
      link: string;
      title: 'string';
      bgClassName: string;
      items: Array<any>;
    }[]
  ) => {
    setNavs(updatedNavs);
  };

  let currentNav = navs.filter((nav) => nav.link === currentSegment);

  if (currentNav.length === 0) {
    for (let nav of navs) {
      const itemNav = nav.items.filter((item) => item.link === currentSegment);
      if (itemNav.length > 0) {
        currentNav = [...itemNav];
      }
    }
  }

  return (
    <html lang='ru' className='scroll-smooth'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className={`${currentNav[0]?.bgClassName || 'bg-white'}`}>
        <GlobalProvider>
          <header className='fixed top-0 w-full'>
            <Navbar
              navsChangeHandler={navsChangeHandler}
              background={`${currentNav[0]?.bgClassName || 'bg-white'}`}
            />
          </header>
          <SidebarButtons
            background={`${currentNav[0]?.bgClassName || 'bg-white'}`}
          />
          <div className='mt-90'>{children}</div>

          <ScrollRestoration />
          <Scripts />
        </GlobalProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
