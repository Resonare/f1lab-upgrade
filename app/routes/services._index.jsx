import { Link } from '@remix-run/react';

export const meta = () => {
  return [{ title: 'F1LAB' }, { name: 'Услуги', content: 'Welcome to Remix!' }];
};

export default function Services() {
  return (
    <>
      <div className='text-5xl font-title p-100'>Услуги</div>
      <Link to='it-audit' className='text-3xl font-title p-100'>
        ИТ-Аудит
      </Link>
    </>
  );
}
