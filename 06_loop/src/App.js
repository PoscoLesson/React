import ForLoop from './component/ForLoop';
import Map from './component/Map';
import Filter from './component/Filter';
import Alphabet from './component/Alphabet';
import Comment from './component/Comment';

function App() {
  return (
    <div className='App'>
      {/* for문을 사용한 반복 예시 */}
      <ForLoop />

      {/* map()을 사용한 반복 예시 */}
      <Map />

      {/* 반복문과 자주 사용되는 filter() 예시 */}
      <Filter />

      {/* Alphabet 실습 해설 */}
      <Alphabet />

      {/* Comment 실습 해설 */}
      <Comment />
    </div>
  );
}

export default App;
