import { useEffect, useRef, useState } from 'react';
import { Header } from './components/Header';
import { TaskInput } from './components/TaskInput';
import { TaskList } from './components/TaskList';
import ThemeContext from './components/ThemeContext';

function App() {
  const [theme, setTheme] = useState('white');

  const toggleTheme = () => {
    setTheme(theme === 'white' ? 'black' : 'white');
  };

  const themeConfig = {
    theme: theme,
    toggleTheme: toggleTheme,
  };

  const [value, setValue] = useState('');
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem('todo');
    return saved ? JSON.parse(saved) : [];
  });

  const input = useRef(null);

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo));
  }, [todo]);

  const handleAdd = () => {
    const addedTodo = [...todo, { id: Date.now(), value: value, completed: false }];
    setTodo(addedTodo);
    setValue('');
    if (input.current) {
      input.current.focus();
    }
  };

  const handleDelete = (id) => {
    const tmpTodo = todo.filter((item) => item.id !== id);
    setTodo(tmpTodo);
  };

  const handleComplete = (id) => {
    const tmpTodo = todo.map((item) => {
      if (item.id === id) {
        return { ...item, completed: true };
      }
      return item;
    });
    setTodo(tmpTodo);
  };

  return (
    <>
      <ThemeContext value={themeConfig}>
        <div style={{ backgroundColor: theme }}>
          <Header />
          <TaskInput value={value} setValue={setValue} handleAdd={handleAdd} inputRef={input} />
          <TaskList todo={todo} handleComplete={handleComplete} handleDelete={handleDelete} />
        </div>
      </ThemeContext>
    </>
  );
}

export default App;
