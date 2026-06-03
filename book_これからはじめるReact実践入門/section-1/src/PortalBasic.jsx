import { useState } from 'react';
import { createPortal } from 'react-dom';

export const PortalBasic = () => {
  const [show, setShow] = useState(false);
  const handleDialog = () => setShow((s) => !s);

  return (
    <>
      <button onClick={handleDialog} disabled={show}>
        表示だ！
      </button>
      {show &&
        createPortal(
          <>
            えっへっへ。。。
            <button onClick={handleDialog}>閉じる</button>
          </>,
          document.getElementById('ahra'),
        )}
    </>
  );
};
