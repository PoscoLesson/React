// 테마 설정을 위한 Context
import { createContext, useState } from 'react';

// 테마 Context 생성 및 기본값 설정
export const ThemeContext = createContext({
  theme: 'Light', // 기본 테마
  setTheme: () => {}, // 테마 변경 함수
});

// 테마 Provider 컴포넌트
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('Light');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
