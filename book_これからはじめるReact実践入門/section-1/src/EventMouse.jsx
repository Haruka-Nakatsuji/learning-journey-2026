import { useState } from 'react';

export const EventMouse = () => {
  const [color, setColor] = useState('red');

  const handleEnter = () => setColor('blue');
  const handleLeave = () => setColor('red');

  return (
    <>
      <p onMouseEnter={handleEnter} onMouseLeave={handleLeave} style={{ color: `${color}` }}>
        うんこ
      </p>
    </>
  );
};
