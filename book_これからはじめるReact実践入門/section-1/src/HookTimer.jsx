import { useEffect, useState } from 'react';

export const HookTimer = ({ init }) => {
  const [count, setCount] = useState(init);

  useEffect(() => {
    const t = setInterval(() => {
      setCount((c) => c - 1);
    }, 1000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return <div style={{ color: `${count < 0 ? 'red' : ''}` }}>現在のカウント: {count}</div>;
};
