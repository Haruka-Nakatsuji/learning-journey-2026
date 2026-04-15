export const CompleteTodos = (props) => {
  const { todos, onClick } = props;
  return (
    <div className='complete-area'>
      <p>完了のTODO</p>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo}>
            <p>{todo}</p>
            <button onClick={() => onClick(index)}>戻す</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
