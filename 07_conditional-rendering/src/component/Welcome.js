// if 문을 사용한 조건부 렌더링
// export default function Welcome(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn === true) {
//     return <h1>Welcome back!</h1>;
//   } else {
//     return <h1>Please sign up.</h1>;
//   }
// }

// 삼항 연산자를 사용한 조건부 렌더링
// export default function Welcome(props) {
//   return (
//     <>{props.isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>}</>
//   );
// }

// && 연산자를 사용한 조건부 렌더링
export default function Welcome(props) {
  const isLoggedIn = props.isLoggedIn;
  return <>{isLoggedIn && <h1>Welcome back!</h1>}</>;
}
