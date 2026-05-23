import { memo } from 'react';
import { Header } from '../organisms/layout/Header';
import { Outlet } from 'react-router';

export const HeaderLayout = memo(() => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
});
