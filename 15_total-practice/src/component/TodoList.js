import TodoItem from './TodoItem';

export default function TodoList(props) {
  const { todos, handleDeleteTodo } = props;
  return (
    <section>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </section>
  );
}
