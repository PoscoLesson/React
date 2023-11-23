// 1. Context.Consumer를 사용해 Context의 값을 사용하는 방법
// import UserContext from '../context/UserContext';

// export default function UserProfile() {
//   return (
//     <UserContext.Consumer>
//       {({ name, setName }) => (
//         <h2>사용자 프로필</h2>
//         <p>이름: {name}</p>
//         <button onClick={() => setName('이순신')}>이름 변경</button>
//       )}
//     </UserContext.Consumer>
//   );
// }

// 2. useContext를 사용해 Context의 값을 사용하는 방법
import { useContext } from 'react';
import UserContext from '../context/UserContext';

export default function UserProfile() {
  const { name, setName } = useContext(UserContext);

  return (
    <>
      <h2>사용자 프로필</h2>
      <p>이름: {name}</p>
      <button onClick={() => setName('이순신')}>이름 변경</button>
    </>
  );
}
