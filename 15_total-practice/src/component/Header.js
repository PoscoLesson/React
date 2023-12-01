import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LoginStatusContext } from '../context/LoginStatusContext';

export default function Header() {
  // context를 사용해 로그인 유무 확인
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginStatusContext);

  return (
    <header className='header'>
      <h1>My Diary</h1>
      <nav>
        <Link to='/'>Home</Link>

        {/* 로그인 유저인 경우 Todo, Memo 페이지 이동과 Logout 기능이 포함된 헤더 렌더 */}
        {isLoggedIn ? (
          <>
            <Link to='/todo'>Todo</Link>
            <Link to='/memo'>Memo</Link>
            <Link to='/login' onClick={() => setIsLoggedIn(false)}>
              Logout
            </Link>
          </>
        ) : (
          // 로그인하지 않은 유저의 경우 로그인 페이지 이동하는 Link 태그만 렌더
          <Link to='/login'>Login</Link>
        )}
      </nav>
    </header>
  );
}
