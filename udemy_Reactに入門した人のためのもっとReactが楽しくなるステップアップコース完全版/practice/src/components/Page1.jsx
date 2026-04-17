import { Link, useNavigate } from 'react-router';

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const navigate = useNavigate();
  const onClickDetailA = () => {
    navigate('/page1/detailA');
  };
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to='/page1/detailA' state={{ some: arr }}>
        DetailA
      </Link>
      <br />
      <button onClick={onClickDetailA}>DetailA</button>
    </div>
  );
};
