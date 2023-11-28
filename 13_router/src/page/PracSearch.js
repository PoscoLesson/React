import { useSearchParams } from 'react-router-dom';
import NavigationBar from './../component/NavigationBar';

export default function PracSearch() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchWord = searchParams.get('searchWord');

  return (
    <>
      <NavigationBar />
      <div>검색어 : {searchWord}</div>
    </>
  );
}
