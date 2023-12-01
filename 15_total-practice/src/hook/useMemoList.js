import { useState, useEffect } from 'react';

const useMemoList = () => {
  const [memos, setMemos] = useState([]);

  // 세션 스토리지에서 메모 가져오기
  useEffect(() => {
    const storedMemos = sessionStorage.getItem('memos');
    if (storedMemos) {
      setMemos(JSON.parse(storedMemos));
    }
  }, []);

  // 메모가 변경될 때마다 세션 스토리지를 업데이트
  useEffect(() => {
    sessionStorage.setItem('memos', JSON.stringify(memos));
  }, [memos]);

  // 새 메모 추가
  const addMemo = (memo) => {
    setMemos([...memos, memo]);
  };

  // 메모 수정
  const updateMemo = (index, newMemo) => {
    const updatedMemos = [...memos];
    updatedMemos[index] = newMemo;
    setMemos(updatedMemos);
  };

  // 메모 삭제
  const deleteMemo = (index) => {
    const updatedMemos = memos.filter((_, idx) => idx !== index);
    setMemos(updatedMemos);
  };

  return { memos, addMemo, updateMemo, deleteMemo };
};

export default useMemoList;
