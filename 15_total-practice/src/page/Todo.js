import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import useTitle from '../hook/useTitle';
import TodoList from '../component/TodoList';
import Input from '../component/Input';

export default function Todo() {
  const requestURL = useRef(
    'https://crudcrud.com/api/e854148c46f948cab3f9dc833a0b74da/todo'
  );
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');
  useTitle('Todo');

  // 컴포넌트 마운트 시 todo 목록 받아와 todos state에 저장
  useEffect(() => {
    axios
      .get(requestURL.current)
      .then((response) => {
        setTodos(response.data);
      })
      .catch(handleError);
  }, []);

  const handleError = (error) => {
    if (error.response) {
      // 서버가 응답을 반환했지만, 오류가 있는 경우
      console.log('응답 상태 코드: ', error.response.status);
    } else if (error.request) {
      // 요청이 전송되었으나 응답을 받지 못한 경우
      console.log('요청은 성공했지만 응답을 받지 못함');
    } else {
      // 요청을 설정하는 중에 발생한 오류
      console.log('요청 자체에 문제 발생:', error.message);
    }
  };

  const handleAddTodo = () => {
    const postTodo = { content: todo };
    axios
      .post(requestURL.current, postTodo)
      .then((response) => {
        // 응답으로 받은 데이터를 새로운 Todo 객체로 생성
        const newTodo = { ...response.data, _id: response.data._id };
        // 새 todo를 기존 목록에 추가
        setTodos([...todos, newTodo]);
        setTodo('');
      })
      .catch(handleError);
  };

  const handleDeleteTodo = (id) => {
    axios
      .delete(`${requestURL.current}/${id}`)
      .then(() => {
        // todo 목록에서 해당 id값을 가진 요소 삭제
        setTodos(todos.filter((todo) => todo._id !== id));
      })
      .catch(handleError);
  };

  return (
    <div className='bg-gray'>
      <h3>✍🏻 TODO</h3>
      <Input state={todo} setState={setTodo} handleAddItem={handleAddTodo} />
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} />
    </div>
  );
}
