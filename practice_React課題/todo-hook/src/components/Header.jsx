import { useContext } from 'react';
import ThemeContext from './ThemeContext';

export const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>TODOリスト</h1>
      <button onClick={toggleTheme}>テーマチェンジ（現在{theme}）</button>
    </header>
  );
};
