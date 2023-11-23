// 언어 설정을 위한 Context
import { createContext, useState } from 'react';

// 언어 Context 생성 및 기본값 설정
export const LanguageContext = createContext({
  language: 'English', // 기본 언어
  setLanguage: () => {}, // 언어 변경 함수
});

// 언어 Provider 컴포넌트
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('English');

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
