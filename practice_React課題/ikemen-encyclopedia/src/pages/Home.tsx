import { useQuery } from '@tanstack/react-query';
import { getUsers } from '../api/userApi';
import { Loader2 } from 'lucide-react';
import { UserCard } from '../components/molecules/UserCard';
import { useLoginUser } from '../components/providers/LoginUserProvider';

export const Home = () => {
  const { setLoginUser } = useLoginUser();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers,
  });
  if (isPending) {
    return <Loader2 className='animate-spin' />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const handleLogin = () => {
    if (data && data.length > 0) {
      setLoginUser(data[0]); // 1番目のイケメンを「自分」としてログインさせる暴挙
    }
  };

  return (
    <>
      <h1>イケメン図鑑</h1>
      <button onClick={handleLogin} className='bg-pink-500 text-white px-4 py-2 rounded-lg'>
        1番目の人でログイン
      </button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            <UserCard user={user} />
          </li>
        ))}
      </ul>
    </>
  );
};
