import { useRef, useState } from 'react';

export const RefBasic = () => {
  const count = useRef(0);
  const [countdown, setCountdown] = useState(10);
  const timerStartedRef = useRef(false);

  const countup = () => {
    if (countdown <= 0) {
      alert(`タイムアップ！あなたの連打数は ${count.current} 回でした！`);
      return;
    }
    count.current += 1;
    console.log('現在の連打数:', count.current); // コンソールで見ると裏で増えてるのがわかるよ
  };

  const start = () => {
    if (timerStartedRef.current) return;
    timerStartedRef.current = true;

    const timerId = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timerId); // 0になったらタイマーを止める
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  return (
    <>
      <h1>カウントダウン遊び</h1>
      <h2>{countdown}</h2>
      <button onClick={countup}>カウントアップ</button>
      <button onClick={start} disabled={countdown !== 10}>
        タイマースタート
      </button>
    </>
  );
};
