import UseOpenApi from './component/UseOpenApi';
import Post from './component/Post';

function App() {
  return (
    <div className='App'>
      {/* 오픈 API CrudCrud를 사용한 유저 CRUD 기능 */}
      <UseOpenApi />

      {/* 오픈 API CrudCrud를 사용한 게시판 실습 */}
      <Post />
    </div>
  );
}

export default App;
