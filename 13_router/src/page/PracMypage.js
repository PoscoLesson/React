import { useParams } from 'react-router-dom';
import NavigationBar from './../component/NavigationBar';

export default function PracMypage() {
  const { userId } = useParams();

  return (
    <>
      <NavigationBar />
      <div>{userId}님의 마이페이지 입니다.</div>
    </>
  );
}
