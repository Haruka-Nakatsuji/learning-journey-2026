import { Link } from 'react-router';

export const Header = ({ cartItems }) => {
  const cartItemsLength = cartItems.length;
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>商品一覧</Link>
        </li>
        <li>
          <Link to='/cart'>カート [{cartItemsLength}件]</Link>
        </li>
      </ul>
    </header>
  );
};
