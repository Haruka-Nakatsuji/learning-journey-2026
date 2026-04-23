import axios from 'axios';
import './App.css';
import { Practice1 } from './practices/Practice1';
import { Practice2 } from './practices/Practice2';
import { Practice3 } from './practices/Practice3';
import { Practice4 } from './practices/Practice4';
import { useState } from 'react';
import { Todo } from './Todo';
import type { TodoType } from './types/todo';
import { Text } from './Text';
import { UserProfile } from './UserProfile';
import type { User } from './types/user';

const user: User = {
  name: 'うんちっち',
  hobbies: ['英語', 'ゲーム'],
};

function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);
  const onClickFetchData = () => {
    axios.get<Array<TodoType>>('https://jsonplaceholder.typicode.com/todos').then((res) => {
      setTodos(res.data);
    });
  };
  return (
    <>
      {/* <Practice1 />
      <Practice2 />
      <Practice3 />
      <Practice4 /> */}
      <UserProfile user={user} />
      <Text color='red' fontSize='18px' />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} userId={todo.userId} completed={todo.completed} />
      ))}
    </>
  );
}

export default App;
