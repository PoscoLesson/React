import AccessDom from './component/AccessDom';
import Variable from './component/Variable';
import UseRefPrac from './component/UseRefPrac';
import ComputeExpensive from './component/ComputeExpensive';
import UseMemoPrac from './component/UseMemoPrac';
import UseCallbackPrac from './component/UseCallbackPrac';
import Counter from './component/Counter';

function App() {
  return (
    <div className='App'>
      <h3>useRef를 사용해 DOM 요소에 접근하기</h3>
      <AccessDom />

      <h3>useRef를 사용해 일반적인 지역 변수 사용하기</h3>
      <Variable />

      <h3>useRef 실습</h3>
      <UseRefPrac />

      <h3>useMemo를 사용해 임의의 큰 연산 결과값 저장하기</h3>
      <ComputeExpensive />

      <h3>useMemo 실습</h3>
      <UseMemoPrac />

      <h3>useCallback 실습</h3>
      <UseCallbackPrac />

      <h3>useReducer를 사용해 Counter 기능 구현하기</h3>
      <Counter />
    </div>
  );
}

export default App;
