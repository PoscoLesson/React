import { useState } from 'react';

export default function Map() {
  // 배열 예시
  //   const [list, setList] = useState(['a', 'b', 'c', 'd', 'e']);

  //   return (
  //     <>
  //       <ol>
  //         {list.map((value, index) => {
  //           return <li key={index}>{value}</li>;
  //         })}
  //       </ol>
  //     </>
  //   );

  // 객체 예시
  const [list, setList] = useState([
    { id: 1, alpha: 'a' },
    { id: 2, alpha: 'b' },
    { id: 3, alpha: 'c' },
    { id: 4, alpha: 'd' },
    { id: 5, alpha: 'e' },
  ]);

  return (
    <ol>
      {list.map((value) => (
        <li key={value.id}>{value.alpha}</li>
      ))}
    </ol>
  );
}
