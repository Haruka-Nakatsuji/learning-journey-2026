import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router';
import { getUserById } from '../api/userApi';
import { Loader2 } from 'lucide-react';
import { useLoginUser } from '../components/providers/LoginUserProvider';

export const UserDetail = () => {
  const { loginUser, setFavoriteId, favoriteId } = useLoginUser();
  const { id } = useParams();

  const { isPending, isError, data, error } = useQuery({
    queryKey: ['user', id],
    queryFn: () => getUserById(id!),
  });
  if (isPending) {
    return <Loader2 className='animate-spin' />;
  }
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const toggleFavorite = (id: number) => {
    if (!loginUser) return alert('ログインしてください');
    const fvid = favoriteId === id ? null : id;
    setFavoriteId(fvid);
  };

  return (
    <>
      <h1>ユーザー詳細</h1>
      <h2>{data.name}</h2>
      <button
        onClick={() => toggleFavorite(data.id)}
        className={
          favoriteId === data.id
            ? 'bg-pink-500 text-white px-4 py-2 rounded-lg'
            : 'bg-gray-500 text-white px-4 py-2 rounded-lg'
        }
      >
        {favoriteId === data.id ? <>推し設定中</> : <>推しにする</>}
      </button>
      <dl>
        <dt>Phone</dt>
        <dd>{data.phone}</dd>
      </dl>
      <dl>
        <dt>Email</dt>
        <dd>{data.email}</dd>
      </dl>
      <dl>
        <dt>Address</dt>
        <dd>{data.address.street}</dd>
      </dl>
      <dl>
        <dt>Company</dt>
        <dd>{data.company.name}</dd>
        <dd>{data.company.catchPhrase}</dd>
      </dl>
    </>
  );
};
