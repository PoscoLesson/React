import ChangeColor from './component/ChangeColor';
import ConsoleEvent from './component/ConsoleEvent';
import SyntheticEventAttr from './component/SyntheticEventAttr';
import TotalPractice from './component/TotalPractice';

function App() {
  return (
    <div className='App'>
      <h3>event객체 console에서 확인하기</h3>
      <ConsoleEvent />

      <h3>SyntheticEvent의 Atrribur와 method</h3>
      <SyntheticEventAttr />

      <h3>실습 1</h3>
      <ChangeColor />

      <h3>실습 2</h3>
      <TotalPractice />
    </div>
  );
}

export default App;
