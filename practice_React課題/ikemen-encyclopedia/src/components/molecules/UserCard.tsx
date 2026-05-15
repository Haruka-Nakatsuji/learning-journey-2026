import { memo } from 'react';
import { Link } from 'react-router';
import { useLoginUser } from '../providers/LoginUserProvider';
import { Heart } from 'lucide-react';

export const UserCard = memo(({ user }: { user: User }) => {
  const { favoriteId } = useLoginUser();

  return (
    <Link to={`/user/${user.id}`}>
      <div className='border rounded-xl shadow-sm p-4 hover:shadow-lg transition'>
        <div className='flex items-center'>
          <img src={`https://picsum.photos/seed/${user.id}/200/200`} alt='' />
          <div className='px-8'>
            <h2>{user.name}</h2>
            <p>{user.address.street}</p>
            <p>{user.phone}</p>
            {favoriteId === user.id && <Heart />}
          </div>
        </div>
      </div>
    </Link>
  );
});
