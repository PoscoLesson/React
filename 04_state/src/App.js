import Greeting from './component/Greeting';
import GreetingClass from './component/GreetingClass';
import Counter from './component/Counter';

function App() {
  return (
    <div className='App'>
      {/* 함수형 컴포넌트에서 state 사용 */}
      <Greeting />

      {/* 클래스형 컴포넌트에서 state 사용 */}
      <GreetingClass />

      {/* 실습 Counter 컴포넌트 만들기 */}
      <Counter />
    </div>
  );
}

export default App;
