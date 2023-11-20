import Welcome from './component/Welcome';
import LoginControl from './component/LoginControl';
import CurrentPage from './component/CurrentPage';
import Page from './component/Page';

function App() {
  return (
    <div className='App'>
      <h3>if문, 삼항 연산자, && 연산자를 사용한 조건부 렌더링</h3>
      <Welcome isLoggedIn={true} />
      <Welcome isLoggedIn={false} />

      <h3>if문, 삼항 연산자, && 연산자를 사용한 조건부 렌더링 실습</h3>
      <LoginControl />

      <h3>switch문을 사용한 조건부 렌더링 실습</h3>
      <CurrentPage />

      <h3>컴포넌트 렌더링 막기</h3>
      <Page />
    </div>
  );
}

export default App;
