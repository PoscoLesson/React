import { useState } from 'react'; // useState를 import한다.

export default function Greeting() {
  const [message, setMessage] = useState('안녕하세요.');

  return (
    <>
      <div>{message}</div> {/* message의 상태 값 보여주기 */}
      <button onClick={() => setMessage('안녕히가세요.')}>click</button>
      {/* 버튼 클릭 시 message 상태의 값을 '안녕히가세요'로 변경 */}
    </>
  );
}
