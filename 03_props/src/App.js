import Fruits from './component/Fruits';
import Welcome from './component/Welcome';
import WelcomeClass from './component/WelcomeClass';
import DataType from './component/DataType';
import DataTypeClass from './component/DataTypeClass';
import Default from './component/Default';
import DefaultClass from './component/DefaultClass';
import PropsChildren from './component/PropsChildren';
import RenderPersonInfo from './component/RenderPersonInfo';

function App() {
  return (
    <div className='App'>
      {/* props 전달 예시 */}
      <Fruits />

      {/* 함수형 컴포넌트 props 전달 */}
      <Welcome name='코딩온' />

      {/* 클래스형 컴포넌트 props 전달 */}
      <WelcomeClass name='코딩온' />

      {/* 함수형 컴포넌트 props의 데이터 타입 지정 */}
      <DataType data='코딩온' />

      {/* 클래스형 컴포넌트 props의 데이터 타입 지정, props 필수값 지정 */}
      <DataTypeClass data='코딩온' />

      {/* 함수형 컴포넌트에서 props의 기본값 지정 */}
      <Default />

      {/* 클래스형 컴포넌트에서 props의 기본값 지정 */}
      <DefaultClass />

      {/* props.children 사용 */}
      <PropsChildren data='data'>
        props.children으로 전달할 문자열
      </PropsChildren>

      {/* 실습 */}
      <RenderPersonInfo age={20} gender='남성'>
        리더
      </RenderPersonInfo>
      <RenderPersonInfo name='홍길동' age={15} gender='남성'>
        크루
      </RenderPersonInfo>
      <RenderPersonInfo name='성춘향' age={17} gender='여성'>
        크루
      </RenderPersonInfo>
    </div>
  );
}

export default App;
