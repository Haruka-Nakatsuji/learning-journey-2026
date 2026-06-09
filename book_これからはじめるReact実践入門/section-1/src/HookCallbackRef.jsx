import { useEffect, useRef, useState } from 'react';

export const HookCallbackRef = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show);

  // コールバックRef
  const callbackRef = (elem) => {
    console.log(elem);
    elem?.focus();
  };

  // 勝手にref="address"にしてくれる
  // const address = useRef(null);

  // useEffect(() => {
  //   console.log(address.current);
  //   if (address.current) {
  //     address.current.focus();
  //   }
  // }, [show]);

  return (
    <>
      <div>
        <label htmlFor='name'>名前：</label>
        <input type='text' id='name' />
      </div>
      <div>
        <label htmlFor='email'>メールアドレス：</label>
        <input type='text' id='email' />
        <button onClick={handleClick}>拡張表示</button>
      </div>
      {show && (
        <div>
          <label htmlFor='address'>住所：</label>
          <input type='text' id='address' ref={callbackRef} />
        </div>
      )}
    </>
  );
};
