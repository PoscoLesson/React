import { useContext, useMemo } from 'react';
import { TodoContext } from '../context/TodoContext';

export default function TodoList() {
  const { todos, toggleTodo } = useContext(TodoContext);

  const filteredTodos = useMemo(
    () => todos.filter((todo) => !todo.completed),
    [todos]
  );

  const completedTodos = useMemo(
    () => todos.filter((todo) => todo.completed),
    [todos]
  );

  return (
    <>
      <h3>TODO</h3>
      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => toggleTodo(todo.id)}>done</button>
          </li>
        ))}
      </ul>

      {completedTodos.length !== 0 && (
        <>
          <h3>DONE</h3>
          <ul>
            {completedTodos.map((todo) => (
              <li key={todo.id}>
                {todo.text}
                <button onClick={() => toggleTodo(todo.id)}>return</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}
