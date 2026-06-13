import { use } from 'react';

export const Profile = ({ userPromise }: any) => {
  const user = use(userPromise);

  return (
    <div>
      <h2>プロフィール</h2>
      <p>名前： {user.name}</p>
      <p>ランク： {user.rank}</p>
    </div>
  );
};
