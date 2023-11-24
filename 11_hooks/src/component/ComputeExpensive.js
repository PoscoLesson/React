import React, { useState, useMemo } from 'react';

export default function ComputeExpensive() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  // 임의로 큰 연산을 하는 함수
  const computeExpensiveValue = (count) => {
    console.log('임의로 큰 연산 진행 중...');
    for (let i = 0; i < 100000; i++) {}

    return count ** 2; // 예시로 count의 제곱을 반환
  };

  // useMemo를 사용하지 않는 경우
  // const expensiveValue = computeExpensiveValue(count);

  // useMemo를 사용하는 경우
  const expensiveValue = useMemo(() => computeExpensiveValue(count), [count]);

  return (
    <>
      <p>임의의 큰 연산 결과: {expensiveValue}</p>
      <button onClick={() => setCount(count + 1)}>count + 1</button>
      <button onClick={() => setOtherState(otherState + 1)}>
        otherState + 1
      </button>
    </>
  );
}
