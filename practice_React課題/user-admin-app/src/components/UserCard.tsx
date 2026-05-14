import { Link } from 'react-router';
import type { User } from '../types/api/user';
import { memo, useContext } from 'react';
import { UserContext } from '../store/userState';

export const UserCard = memo(({ data }: { data: User }) => {
  const context = useContext(UserContext) || null;
  if (!context) return null;
  const { setUser } = context;

  const login = (data: User) => {
    setUser(data);
  };

  return (
    <li className='flex justify-between gap-x-6 py-5'>
      <p className='text-sm/6 font-semibold text-gray-900'>{data.name}</p>
      <Link
        to={`/users/${data.id}`}
        className='inline-flex h-12 items-center justify-center rounded-md bg-neutral-950 px-6 font-medium text-neutral-50 transition active:scale-110'
      >
        詳細ページ
      </Link>
      <button onClick={() => login(data)}>この人でログイン</button>
    </li>
  );
});
