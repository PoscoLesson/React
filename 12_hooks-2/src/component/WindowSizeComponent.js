import useWindowSize from '../hook/useWindowSize';

export default function WindowSizeComponent() {
  // useWindowSize Hook을 사용하여 창 크기 추적
  const { width, height } = useWindowSize();

  return (
    <>
      <p>너비: {width ? width : '창 크기 정보가 없습니다'}</p>
      <p>높이: {height ? height : '창 크기 정보가 없습니다'}</p>
    </>
  );
}
