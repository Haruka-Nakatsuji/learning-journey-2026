import { Login } from '@/components/pages/Login';
import { memo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';
import { homeRoutes } from './HomeRoutes';
import { Page404 } from '@/components/pages/Page404';

const router = createBrowserRouter([
  {
    path: '/',
    Component: Login,
  },
  {
    path: '/home',
    children: homeRoutes,
  },
  {
    path: '*',
    Component: Page404,
  },
]);

export const Router = memo(() => {
  return <RouterProvider router={router} />;
});
