import { useState } from 'react';

export const EventObj = () => {
  const [client, setClient] = useState({ x: 0, y: 0 });

  const handleKey = (e) => {
    if (e.ctrlKey && e.key === 'k') {
      alert('ヘルプ');
    }
  };

  return (
    <>
      <button onClick={(e) => console.log(e)}>イベントを出す</button>
      <div
        style={{ width: 400, height: 400, backgroundColor: 'salmon' }}
        onMouseMove={(e) => setClient({ x: e.clientX, y: e.clientY })}
      >
        x: {client.x}
        <br />
        y: {client.y}
      </div>
      <br />
      ctrl + kキーでヘルプ
      <form>
        <input type='text' onKeyDown={handleKey} />
      </form>
    </>
  );
};
