// 설정 옵션을 표시하고 변경하는 UI 패널
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { LanguageContext } from '../context/LanguageContext';
import ThemeSelector from './ThemeSelector';
import LanguageSelector from './LanguageSelector';

export default function SettingsPanel() {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <>
      <ThemeSelector />
      <LanguageSelector />
      <div>선택된 테마: {theme}</div>
      <div>선택된 언어: {language}</div>
    </>
  );
}
