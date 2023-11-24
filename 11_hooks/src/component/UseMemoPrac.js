import { useState, useMemo } from 'react';

export default function UseMemoPrac() {
  const [text, setText] = useState('');
  const [searchWord, setSearchWord] = useState('');

  // 입력받은 문자열에서 단어의 빈도수를 세는 함수
  const countWordOccurrences = (text, word) => {
    // 입력받은 문자열와 찾고자 하는 단어가 빈 문자열이 아닌 경우에만 계산
    if (text.trim() && word.trim()) {
      const words = text.split(' ');
      return words.filter((w) => w === word).length;
    }
    // 빈 문자열인 경우 0 반환
    return 0;
  };

  // useMemo를 사용하여 단어 빈도수 계산 결과를 메모이제이션
  const wordCount = useMemo(
    () => countWordOccurrences(text, searchWord),
    [text, searchWord]
  );

  return (
    <>
      <input
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder='텍스트를 입력하세요'
      />
      <input
        type='text'
        value={searchWord}
        onChange={(e) => setSearchWord(e.target.value)}
        placeholder='찾을 단어를 입력하세요'
      />
      <p>
        "{searchWord}" 단어의 빈도수: {wordCount}
      </p>
    </>
  );
}
