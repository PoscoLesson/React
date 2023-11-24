import { useRef, useEffect } from 'react';

export default function AccessDom() {
  const inputRef = useRef();

  useEffect(() => {
    // Javascript의 명령형 코드를 사용해 DOM 요소에 접근하면 React의 선언적 특성에 위배
    // 직접 DOM을 조작하면 React의 가상 DOM과 실제 DOM 간의 상태가 일치하지 않을 수 있음
    const inputElement = document.getElementById('myInput');
    inputElement.focus();

    // 컴포넌트가 Mount된 후에 input 요소에 접근
    // inputRef는 단순히 참조 객체이기 때문에 DOM 요소에 접근하기 위해 inputRef.current 사용
    inputRef.current.focus();
  }, []);

  return (
    <>
      {/* document.getElementById로 DOM 요소에 접근하는 좋지 않은 방식 */}
      <input id='myInput' type='text' />

      {/* useRef Hook을 사용한 안전한 DOM 접근 방식 */}
      <input ref={inputRef} type='text' />
    </>
  );
}
