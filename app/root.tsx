import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation,
} from '@remix-run/react';
import './tailwind.css';

import Navbar from '~/components/Navbar.jsx';
import { useState } from 'react';

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { pathname } = location;
  const segments = pathname.split('/');
  const currentSegment = segments[segments.length - 1];

  const [navs, setNavs] = useState([
    { link: '/', title: 'Главная', bgClassName: 'bg-white' },
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

  const currentNav = navs.filter((nav) => nav.link === currentSegment);

  return (
    <html lang='ru'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body className={`${currentNav[0]?.bgClassName || 'bg-white'}`}>
        <header>
          <Navbar navsChangeHandler={navsChangeHandler} />
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
