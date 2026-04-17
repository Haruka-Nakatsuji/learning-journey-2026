import { memo } from 'react';

const style = {
  width: '100%',
  height: '200px',
  backgroundColor: 'khaki',
};

// 使用しているpropsが更新されていない場合、こいつを再レンダリングされないという設定にできる！
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log('Childレンダリング');

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log('...');
  });

  return (
    <>
      {open && (
        <>
          <p style={style}>小コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </>
      )}
    </>
  );
});
