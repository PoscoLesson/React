import { useState } from 'react';
import useTitle from '../hook/useTitle';
import useMemoList from './../hook/useMemoList';
import Input from '../component/Input';
import MemoItem from '../component/MemoItem';

export default function Memo() {
  const [memo, setMemo] = useState('');
  const { memos, addMemo, updateMemo, deleteMemo } = useMemoList();
  useTitle('Memo');

  // 메모 추가 버튼 클릭 시 호출
  const handleAddMemo = () => {
    addMemo(memo);
    // memo state의 값 빈 값으로 업데이트
    setMemo('');
  };

  return (
    <div className='bg-gray'>
      <h3>📌 Memo</h3>
      <Input state={memo} setState={setMemo} handleAddItem={handleAddMemo} />
      {memos.map((memo, index) => (
        <MemoItem
          key={index}
          memo={memo}
          index={index}
          updateMemo={updateMemo}
          handelDelete={deleteMemo}
        />
      ))}
    </div>
  );
}
