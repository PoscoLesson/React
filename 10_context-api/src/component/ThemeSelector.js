// 테마를 변경하는 UI 컴포넌트
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeSelector() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <label htmlFor='theme-select'>Choose a theme:</label>
      <select
        id='theme-select'
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value='Light'>Light</option>
        <option value='Dark'>Dark</option>
      </select>
    </>
  );
}
