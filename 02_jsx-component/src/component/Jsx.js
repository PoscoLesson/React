export default function Jsx() {
  return (
    // 최상위 부모 요소 필수
    <div>
      {/* 닫는 태그 필수 */}
      <p>exemple</p>
      {/* 단독 태그의 경우 마지막에 /를 통해 태그 닫아주기 */}
      <img scr='./img.png' />
    </div>
  );
}
