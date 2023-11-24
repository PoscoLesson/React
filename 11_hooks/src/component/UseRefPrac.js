import { useState, useRef } from 'react';

export default function UseRefPrac() {
  const [isChecked, setIsChecked] = useState(false);
  const inputRef = useRef();
  const messageRef = useRef('성함이 입력되지 않음');

  const handleButtonClick = () => {
    const username = inputRef.current.value.replace(/\s/g, ''); // 모든 공백을 제거

    if (username.length > 4) {
      // 4글자를 초과하면 알림창을 띄우고 input에 focus
      alert('성함은 공백을 제외하고 4글자 이하입니다.');
      inputRef.current.focus();
      setIsChecked(false);
      messageRef.current = '성함이 입력되지 않음';
    } else {
      setIsChecked(true); // 4글자 이하면 isChecked 상태 업데이트
      messageRef.current = inputRef.current.value; // 메시지 참조 변수 업데이트
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        type='text'
        placeholder='성함을 입력하세요'
        defaultValue='' // 입력 필드 초기화
      />
      <button onClick={handleButtonClick}>확인</button>
      <p>{isChecked ? '성함 확인됨' : '성함이 확인되지 않음'}</p>
      <p>{messageRef.current}</p>
    </>
  );
}
