import useTitle from '../hook/useTitle';

export default function Home() {
  useTitle('Home');

  return (
    <>
      <h3>Main Page</h3>
      <div>종합 실습 메인페이지입니다.</div>
      <div>자유롭게 꾸며주세요.</div>
    </>
  );
}
