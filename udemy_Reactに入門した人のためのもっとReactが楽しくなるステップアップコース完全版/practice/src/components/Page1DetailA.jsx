import { useLocation, useNavigate } from 'react-router';

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();
  const onClickBack = () => navigate(-1);

  return (
    <div>
      <h1>DetailAページです</h1>
      <button onClick={onClickBack}>戻る</button>
    </div>
  );
};
