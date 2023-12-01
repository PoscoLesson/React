import { useEffect } from 'react';

// 해당 브라우저의 title을 props로 전달받은 title로 업데이트하는 Custom Hook
export default function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    return () => (document.title = prevTitle);
  }, [title]);
}
