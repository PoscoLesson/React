import { useState, useEffect } from 'react';

// 사용자 브라우저 창 크기를 추적하는 Custom Hook
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // 창 크기를 설정하는 핸들러 함수
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // 컴포넌트 Mount 시 창 크기 설정
    handleResize();

    // 창 크기 변경 시 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트 Unmount 시 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}
