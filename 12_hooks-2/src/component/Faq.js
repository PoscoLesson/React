import useToggle from '../hook/useToggle';

export default function Faq() {
  const [isFaqOpen, setIsFapOpen] = useToggle();

  return (
    <>
      <div onClick={setIsFapOpen} style={{ cursor: 'pointer' }}>
        Q. 리액트에서 커스텀 훅을 만들 수 있나요?
      </div>
      {isFaqOpen && <div>A. 네, 가능합니다.</div>}
    </>
  );
}
