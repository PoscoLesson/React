import UserProvider from './context/UserProvider';
import UserProfile from './component/UserProfile';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import SettingsPanel from './component/SettingsPanel';

const App = () => {
  return (
    <>
      <h3>Context API 예제</h3>
      <UserProvider>
        <UserProfile />
      </UserProvider>

      <h3>Context API 실습</h3>
      <ThemeProvider>
        <LanguageProvider>
          <SettingsPanel />
        </LanguageProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
