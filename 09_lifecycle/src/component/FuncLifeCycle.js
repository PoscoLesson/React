import { useEffect, useState } from 'react';

export default function FuncLifeCycle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('컴포넌트 Mount됨 = componentDidMount');

    return () => {
      console.log('컴포넌트 Unmount됨 = componentWillUnmount');
    };
  }, []);

  //   useEffect(() => {
  //     console.log('컴포넌트 Mount되거나 Update됨');
  //   });

  //   useEffect(() => {
  //     console.log('컴포넌트 Mount되거나 Update됨 = render');
  //   }, [count]);

  //   만약 의존성 배열에 넘긴 값이 정확히 Update될 때만 호출하려면 조건문 작성
  //   useEffect(() => {
  //     if (count > 0) {
  //       console.log(`컴포넌트 Update됨 = componentDidUpdate`);
  //     }
  //   }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +
      </button>
    </>
  );
}
