import { BrowserRouter, Route, Routes } from 'react-router';
import { Header } from '../components/Header';
import { UsersList } from '../components/UsersList';
import { UserDetail } from '../components/UserDetail';

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index path='/' element={<p>ホームです</p>} />
        <Route path='/users' element={<UsersList />} />
        <Route path='/users/:id' element={<UserDetail />} />
        <Route path='*' element={<p>404</p>} />
      </Routes>
    </BrowserRouter>
  );
};
