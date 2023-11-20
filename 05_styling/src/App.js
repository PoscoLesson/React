import ExCssModule from './component/ExCssModule';
import ExSass from './component/ExSass';
import ExStyledComponents from './component/ExStyledComponents';
import StyleCSS from './component/StyleCSS';
import StyleModule from './component/StyleModule';
import StyleSass from './component/StyleSass';
import StyledComponents from './component/StyledComponents';

function App() {
  return (
    <div className='App'>
      {/* CSS Module 예시 */}
      <ExCssModule />
      <br />

      {/* Sass 예시 */}
      <ExSass />
      <br />

      {/* styled-component 예시 */}
      <ExStyledComponents />
      <br />

      {/* CSS 실습 */}
      <StyleCSS />
      <br />

      {/* CSS Module 실습 */}
      <StyleModule />
      <br />

      {/* Sass 실습 */}
      <StyleSass />
      <br />

      {/* styled-components 실습 */}
      <StyledComponents />
    </div>
  );
}

export default App;
