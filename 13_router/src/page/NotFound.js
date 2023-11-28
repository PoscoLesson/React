import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <>
      <h3>🚨NotFound🚨</h3>
      <div>올바르지 않은 URL입니다.</div>
      <Link to='/'>Home으로 이동하기</Link>
    </>
  );
}
