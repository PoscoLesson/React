import { useState } from 'react';

export default function Alphabet() {
  const [alphabet, setAlphabet] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);

  const [inputAlpha, setInputAlpha] = useState('');

  const addAlpha = () => {
    if (!inputAlpha) {
      alert('알파벳을 입력해주세요!');
      return;
    }
    if (inputAlpha.trim().length === 0) {
      alert('띄어쓰기는 입력되지 않습니다. 알파벳을 입력해주세요!');
      return;
    }

    const newAlpha = alphabet.concat({
      id: alphabet.length + 1,
      alpha: inputAlpha,
    });

    setInputAlpha('');
    setAlphabet(newAlpha);
  };

  const deleteAlpha = (targetId) => {
    const newAlpha = alphabet.filter((alpha) => alpha.id !== targetId);

    setAlphabet(newAlpha);
  };

  return (
    <>
      <input
        type='text'
        placeholder='알파벳 입력'
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
      />
      <button onClick={addAlpha}>ADD</button>
      <ol>
        {alphabet.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
        ))}
      </ol>
    </>
  );
}
