import { useState } from 'react';

export default function ForLoop() {
  const [list, setList] = useState(['a', 'b', 'c', 'd', 'e']);

  let listItems = [];

  // key props를 전달해야 한다는 경고창 뜨는 반복문
  //   for (let i = 0; i < list.length; i++) {
  //     listItems.push(<div>{list[i]}</div>);
  //   }

  // key props를 전달하는 반복문 (경고창 X)
  for (let i = 0; i < list.length; i++) {
    listItems.push(<div key={i}>{list[i]}</div>);
  }

  return <>{listItems}</>;
}
