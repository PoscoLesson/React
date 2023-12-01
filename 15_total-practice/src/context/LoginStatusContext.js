import { createContext, useState } from 'react';

// 로그인 유무를 확인하고, 로그인 상태를 업데이트하는 Context
export const LoginStatusContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <LoginStatusContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </LoginStatusContext.Provider>
  );
};
