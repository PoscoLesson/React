import Faq from './component/Faq';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import { TodoProvider } from './context/TodoContext';
import WindowSizeComponent from './component/WindowSizeComponent';

function App() {
  return (
    <>
      <h3>컴포넌트를 토글하는 Custom Hook 만들기</h3>
      <Faq />

      <h3>브라우저의 창 크기를 추척하는 Custom Hook 만들기 실습</h3>
      <WindowSizeComponent />

      <h3>Hooks 종합 실습 Todo 컴포넌트 만들기</h3>
      <TodoProvider>
        <TodoInput />
        <TodoList />
      </TodoProvider>
    </>
  );
}

export default App;
