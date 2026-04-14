import { useState } from 'react';
import { ColorfulMessage } from './components/ColorfulMessage';
import { useEffect } from 'react';

export const App = () => {
  console.log('--App--');

  // useStateはArray型。一番上の回数にしか
  const [num, setNum] = useState(0);
  const [isShow, setIsShow] = useState(false);
  console.log(useState);

  const onClickCountUp = () => {
    // setNumが行われると毎回jsxが上から更新される！
    // 関数の中のsetNumは最後に一気に行われるため、この中の「num」は0!! 0+1
    // set関数のなかには関数が入れられてその引数はグローバルではない？まじの今の値を入れられる
    setNum((prev) => prev + 1);
  };

  const onClickToggle = () => {
    setIsShow(!isShow);
  };

  // []の中が更新されてレンダリングされたら毎回呼び出されるっぽい
  useEffect(() => {
    console.log('--useeffectだよ--');
    if (num > 0) {
      if (num % 3 === 0) {
        isShow || setIsShow(true);
      } else {
        isShow && setIsShow(false);
      }
    }
  }, [num]);

  return (
    <>
      <h1>こんにちは</h1>
      <ColorfulMessage color='blue'>お元気ですか〜</ColorfulMessage>
      <ColorfulMessage color='green'>元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントあっぷ</button>
      <p>{num}</p>
      <button onClick={onClickToggle}>on/off</button>
      {isShow && <p>うんこーーーーーーー</p>}
    </>
  );
};
