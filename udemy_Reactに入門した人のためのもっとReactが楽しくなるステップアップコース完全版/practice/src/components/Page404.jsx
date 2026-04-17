import { Link } from 'react-router-dom';

export const Page404 = () => {
  return (
    <div>
      <h1>ページが見つかりませんでした</h1>
      <Link to='/'>戻るでやんす</Link>
    </div>
  );
};
