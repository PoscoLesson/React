import { useReducer } from 'react';

export default function Counter() {
  const initState = { value: 0 }; // 초기 상태값

  const reducer = (prevState, action) => {
    // action: {type: xxx}
    switch (action.type) {
      case 'INCREMENT':
        return { value: prevState.value + 1 };
      case 'DECREMENT':
        return { value: prevState.value - 1 };
      case 'RESET':
        return initState;
      default:
        return { value: prevState.value };
    }
  };
  // reducer: state를 업데이트하는 함수
  // dispatch: 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state: 현재 상태
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <>
      <h2>{state.value}</h2>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Minus</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </>
  );
}
