export const TaskList = ({ todo, handleComplete, handleDelete }) => {
  return (
    <>
      <div className=''>
        <h2>タスク一覧</h2>
        <ul id='todo'>
          {todo
            .filter(({ id, value, completed }) => !completed)
            .map(({ id, value }) => (
              <li key={id}>
                {value}
                <button onClick={() => handleComplete(id)}>完了</button>
                <button onClick={() => handleDelete(id)}>削除</button>
              </li>
            ))}
        </ul>
      </div>
      <div>
        <h2>完了タスク一覧</h2>
        <ul id='complete'>
          {todo
            .filter(({ value, completed }) => completed)
            .map(({ id, value }) => (
              <li key={id}>
                {value}
                <button onClick={() => handleDelete(id)}>削除</button>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
