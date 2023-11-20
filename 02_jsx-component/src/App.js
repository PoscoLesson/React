import Jsx from './component/Jsx';
import Fragment from './component/Fragment';
import JsExpression from './component/JsExpression';
import Attribute from './component/Attribute';
import ExComponent from './component/ExComponent';
import ConjunctionOperator from './component/ConjunctionOperator';
import FunctionComponent from './component/FunctionComponent';
import Practice1 from './component/Practice1';
import ClassComponent from './component/ClassComponent';
import Practice2 from './component/Practice2';

function App() {
  return (
    <div className='App'>
      <h3>JSX</h3>
      <Jsx />

      <h3>최상위 부모 요소 Fragment 단축 문법 사용</h3>
      <Fragment />

      <h3>JSX 내부에 JS 표현식 사용</h3>
      <JsExpression />

      <h3>Attribute(속성) 부여 시 camelCase 사용</h3>
      <Attribute />

      <h3>React에서 if문 사용</h3>
      <ExComponent />

      <h3>React에서 조건부 연산자 사용</h3>
      <ConjunctionOperator />

      <h3>함수형 컴포넌트</h3>
      <FunctionComponent />

      <h3>함수형 컴포넌트 실습</h3>
      <Practice1 />

      <h3>클래스형 컴포넌트</h3>
      <ClassComponent />

      <h3>클래스형 컴포넌트 실습</h3>
      <Practice2 />
    </div>
  );
}

export default App;
