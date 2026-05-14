import { useContext } from 'react';
import { NavLink } from 'react-router';
import { UserContext } from '../store/userState';

export const Header = () => {
  const { user } = useContext(UserContext) || {};

  return (
    <header>
      <nav className='flex flex-col md:flex-row md:justify-content items-center'>
        <ul className='flex flex-col md:flex-row items-center'>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/users'>Users</NavLink>
          </li>
        </ul>
        <p>ログイン中: {user?.name}</p>
      </nav>
    </header>
  );
};
