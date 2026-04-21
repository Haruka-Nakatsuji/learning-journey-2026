import { useState, useCallback, useMemo } from 'react';
import { ChildArea } from './components/ChildArea';
import { CssModules } from './components/CssModules';

function App() {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open);

  // openが変わった時のみこれを再生成する。関数のmemo化！
  const onClickClose = useCallback(() => setOpen(false), [setOpen]);

  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <>
      <div className='App'>
        {/* <input value={text} onChange={onChangeText} />
        <br />
        <br />
        <button onClick={onClickOpen}>表示</button>
        <ChildArea open={open} onClickClose={onClickClose} />
        <CssModules /> */}
      </div>
    </>
  );
}

export default App;
