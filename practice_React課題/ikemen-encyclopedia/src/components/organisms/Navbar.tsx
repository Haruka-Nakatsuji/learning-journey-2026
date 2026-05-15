import { Link } from 'react-router';
import { useLoginUser } from '../providers/LoginUserProvider';

export const Navbar = () => {
  const { loginUser } = useLoginUser();

  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
          <Link to={'/settings'}>Settings</Link>
        </li>
      </ul>
      <p>Player: {loginUser ? loginUser.name : '未ログイン'}</p>
    </nav>
  );
};
