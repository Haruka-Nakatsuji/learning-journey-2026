import { useState } from 'react';

export const StateBasic = ({ init }) => {
  const [count, setCount] = useState(init);

  const onClickCount = () => {
    setCount((c) => c + 1);
    setCount((c) => c + 1);
  };

  console.log('StateBasic');
  return (
    <>
      <button onClick={onClickCount}>カウントぢゃ</button>
      <p>{count}回クリックされたにょ</p>
    </>
  );
};
