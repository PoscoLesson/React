export default function TodoItem(props) {
  const { todo, handleDeleteTodo } = props;
  return (
    <div className='bg-gray-item'>
      <input type='checkbox' name='todo' id='todo' />
      <span className='todo-content'>{todo.content}</span>
      <button onClick={() => handleDeleteTodo(todo._id)}>X</button>
    </div>
  );
}
