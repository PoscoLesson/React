import { useContext, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginStatusContext } from '../context/LoginStatusContext';
import useTitle from '../hook/useTitle';

export default function Login() {
  const [input, setInput] = useState({ id: '', pw: '' });
  const { setIsLoggedIn } = useContext(LoginStatusContext);
  const navigate = useNavigate();
  useTitle('Login');

  // 임의로 지정한 테스트 계정의 id와 비밀번호
  const userInfo = useRef({ id: 'qwer', pw: 'qwer1234' });

  const handleLogin = () => {
    if (input.id === userInfo.current.id) {
      if (input.pw === userInfo.current.pw) {
        alert('로그인 성공했습니다.');
        setIsLoggedIn(true);
        navigate('/');
      } else {
        alert('비밀번호를 확인해주세요.');
        setInput({ ...input, pw: '' });
      }
    } else {
      alert('아이디나 비밀번호를 확인해주세요.');
      setInput({ id: '', pw: '' });
    }
  };

  return (
    <>
      <h3>Login Page</h3>
      <section className='login'>
        <div>테스트 계정 ID: qwer PW: qwer1234</div>
        <label htmlFor='id'>ID</label>
        <input
          type='text'
          id='id'
          value={input.id}
          onChange={(e) => setInput({ ...input, id: e.target.value })}
          placeholder='ID'
        />
        <label htmlFor='id'>PASSWORD</label>
        <input
          type='password'
          id='pw'
          value={input.pw}
          onChange={(e) => setInput({ ...input, pw: e.target.value })}
          placeholder='PASSWORD'
        />
        <button onClick={handleLogin}>Login</button>
      </section>
    </>
  );
}
