// src/context/UserContext.js 파일에 아래 코드를 작성해주세요.
import { createContext } from 'react';

// Context의 기본값
const defaultUser = {
  name: '기본 이름',
  setName: () => {},
};

// UserContext라는 Context 생성
const UserContext = createContext(defaultUser);

export default UserContext;
