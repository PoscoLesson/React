import { useState } from 'react';

export default function MemoItem(props) {
  const { memo, index, updateMemo, handelDelete } = props;
  // 현재 수정 중인지 확인하는 state
  const [isEditing, setIsEditing] = useState(false);
  // 수정된 내용 state
  const [editedContent, setEditedContent] = useState(memo);

  // 수정 버튼 클릭 시 호출
  const handleEdit = () => {
    setIsEditing(true);
  };

  // 저장 버튼 클릭 시 props로 전달 받은 updateMemo 함수 호출
  const handleSave = () => {
    // updateMemo 함수는 수정된 메모의 index와 수정될 메모를 인자로 받음
    updateMemo(index, editedContent);
    // 수정된 내용을 저장했으니 수정 중이 아니므로 state 업데이트
    setIsEditing(false);
  };

  return (
    <div className='memo-item'>
      {/* 수정중이라면 textarea 렌더 수정중이 아니라면 div로 메모의 content 렌더 */}
      {isEditing ? (
        <textarea
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <div>{memo}</div>
      )}

      <div className='btns'>
        <button
          className='edit-btn'
          // isEditing의 상태에 따라 적합한 이벤트 핸들러 등록
          onClick={isEditing ? handleSave : handleEdit}
        >
          {isEditing ? '✅' : '✍🏻'}
        </button>
        <button onClick={() => handelDelete(index)}>X</button>
      </div>
    </div>
  );
}
