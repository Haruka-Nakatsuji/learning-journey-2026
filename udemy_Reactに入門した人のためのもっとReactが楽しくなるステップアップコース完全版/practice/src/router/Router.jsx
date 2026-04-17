import { Route, Routes } from 'react-router-dom';
import { Home } from '../components/Home';
import { Page1 } from '../components/Page1';
import { Page1DetailA } from '../components/Page1DetailA';
import { Page1DetailB } from '../components/Page1DetailB';
import { Page2 } from '../components/Page2';
import { page1Routes } from './Page1Routes';
import { page2Routes } from './Page2Routes';
import { Page404 } from '../components/Page404';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route
        path='/page1/*'
        element={
          <Routes>
            {page1Routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.children} />
            ))}
          </Routes>
        }
      />
      <Route
        path='/page2/*'
        element={
          <Routes>
            {page2Routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.children} />
            ))}
          </Routes>
        }
      />
      <Route path='*' element={<Page404 />} />
    </Routes>
  );
};
