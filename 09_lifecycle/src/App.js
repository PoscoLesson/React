import { useState } from 'react';
import ClassLifeCycle from './component/ClassLifeCycle';
import FuncLifeCycle from './component/FuncLifeCycle';
import Timer from './component/Timer';

function App() {
  const [showClass, setShowClass] = useState(true);
  const [showFunc, setShowFunc] = useState(true);

  return (
    <div className='App'>
      <h3>클래스형 컴포넌트에서 LifeCycle 기능 사용하기</h3>
      {showClass && <ClassLifeCycle />}
      <button
        onClick={() => {
          setShowClass(!showClass);
        }}
      >
        remove ClassLifeCycle
      </button>

      <h3>함수형 컴포넌트에서 LifeCycle 기능 사용하기</h3>
      {showFunc && <FuncLifeCycle />}
      <button
        onClick={() => {
          setShowFunc(!showFunc);
        }}
      >
        remove FuncLifeCycle
      </button>

      <h3>useEffect를 사용한 타이머 실습</h3>
      <Timer />
    </div>
  );
}

export default App;
