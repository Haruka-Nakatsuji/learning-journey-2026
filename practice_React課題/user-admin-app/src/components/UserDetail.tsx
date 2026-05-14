import { useParams } from 'react-router';

export const UserDetail = () => {
  const { id } = useParams();

  return <p>ユーザーID: {id}の詳細ページです</p>;
};
