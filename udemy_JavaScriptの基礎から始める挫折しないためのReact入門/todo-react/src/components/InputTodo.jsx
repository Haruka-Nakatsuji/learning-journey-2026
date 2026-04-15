// コンポーネントは指示待ち人間！！こいつ一人では考えられないというが・・指示待ち！
// onClickAdd自体をこっちで定義することもできるが、親で定義した方が意外とシンプルになるよ。

const style = {
  backgroundColor: '#ffff45',
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    <div style={style}>
      <input disabled={disabled} type='text' placeholder='TODOを入力' value={todoText} onChange={onChange} />
      <button disabled={disabled} onClick={onClick}>
        追加
      </button>
    </div>
  );
};
