import { useState } from 'react';
import Button from './Button';
import Welcome from './Welcome';

export default function LoginControl() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleToggleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  // if문을 사용한 조건부 렌더링 실습 해설 코드
  //   const renderButton = () => {
  //     if (isLoggedIn) {
  //       return <Button type='Logout' onClick={handleToggleClick} />;
  //     } else {
  //       return <Button type='Login' onClick={handleToggleClick} />;
  //     }
  //   };

  //   return (
  //     <>
  //       <Welcome isLoggedIn={isLoggedIn} />
  //       {renderButton()}
  //     </>
  //   );

  // 삼항 연산자를 사용한 조건부 렌더링 실습 해설 코드
  //   return (
  //     <>
  //       <Welcome isLoggedIn={isLoggedIn} />
  //       {isLoggedIn ? (
  //         <Button type='Logout' onClick={handleToggleClick} />
  //       ) : (
  //         <Button type='Login' onClick={handleToggleClick} />
  //       )}
  //     </>
  //   );

  // && 연산자를 사용한 조건부 렌더링 실습 해설 코드
  return (
    <>
      <Welcome isLoggedIn={isLoggedIn} />
      {isLoggedIn ? (
        <Button type='Logout' onClick={handleToggleClick} />
      ) : (
        <Button type='Login' onClick={handleToggleClick} />
      )}
      {isLoggedIn && <button>Mypage</button>}
    </>
  );
}
