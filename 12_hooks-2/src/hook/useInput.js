import { useState } from 'react';

// 사용자 입력을 처리하는 custom hook
export default function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const reset = () => {
    setValue(initialValue);
  };

  return [value, handleChange, reset];
}
