// 언어를 변경하는 UI 컴포넌트
import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function LanguageSelector() {
  const { language, setLanguage } = useContext(LanguageContext);

  return (
    <>
      <label htmlFor='language-select'>Choose a language:</label>
      <select
        id='language-select'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value='English'>English</option>
        <option value='Korean'>Korean</option>
      </select>
    </>
  );
}
