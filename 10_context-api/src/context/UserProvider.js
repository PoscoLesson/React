import { useState } from 'react';
import UserContext from './UserContext';

// Provider 컴포넌트
export default function UserProvider({ children }) {
  const [name, setName] = useState('홍길동');

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
}
