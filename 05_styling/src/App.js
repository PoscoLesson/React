import NomalCss from './component/NomalCss';
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
      <h3>일반 CSS 예시</h3>
      <NomalCss />

      <h3>CSS Module 예시</h3>
      <ExCssModule />
      <br />

      <h3>Sass 예시</h3>
      <ExSass />
      <br />

      <h3>styled-component 예시</h3>
      <ExStyledComponents />
      <br />

      <h3>CSS 실습</h3>
      <StyleCSS />
      <br />

      <h3>CSS Module 실습</h3>
      <StyleModule />
      <br />

      <h3>Sass 실습</h3>
      <StyleSass />
      <br />

      <h3>styled-components 실습</h3>
      <StyledComponents />
    </div>
  );
}

export default App;
