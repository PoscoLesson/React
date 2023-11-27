import { useContext, useRef, useEffect } from 'react';
import useInput from '../hook/useInput';
import { TodoContext } from '../context/TodoContext';

export default function TodoInput() {
  const [text, handleTextChange, resetText] = useInput('');
  const { addTodo } = useContext(TodoContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = () => {
    if (text) {
      addTodo({ id: Date.now(), text, completed: false });
      resetText();
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type='text'
        value={text}
        onChange={handleTextChange}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </>
  );
}
