import { useEffect, useState } from 'react';

export const StateEffect = ({ init }) => {
  const [count, setCount] = useState(init);
  const [hoge, setHoge] = useState('hoge');

  useEffect(() => {
    console.log(`最初だけでるマン`);
  }, []);

  useEffect(() => {
    console.log(`ずっと見てるよ・・・`);
  });

  useEffect(() => {
    console.log(`count is ${count}.`);
  }, [count]);

  useEffect(() => {
    console.log(`hoge is ${hoge}.`);
  }, [hoge]);

  const click = () => setCount(count + 1);

  return (
    <>
      <button onClick={() => setHoge(Date.now())}>Hoge ({hoge})</button>
      <button onClick={click}>カウント</button>
      <p>{count}回、クリックされたよ</p>
    </>
  );
};
