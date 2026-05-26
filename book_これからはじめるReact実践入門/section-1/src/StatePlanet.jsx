import { useState } from 'react';
import { StateCounter } from './StateCounter';

export const StatePlanet = () => {
  const [count, setCount] = useState(0);
  const onUpdate = (step) => setCount((c) => c + step);

  return (
    <>
      <p>総カウント： {count}</p>
      <StateCounter onUpdate={onUpdate} step={1} />
      <StateCounter onUpdate={onUpdate} step={5} />
      <StateCounter onUpdate={onUpdate} step={-2} />
    </>
  );
};
