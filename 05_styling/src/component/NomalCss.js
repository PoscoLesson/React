import '../style/nomalCss.css';

export default function NomalCss() {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navbar__item navbar__item--selected'>
          <a href='/'>Home</a>
        </li>
        <li className='navbar__item'>
          <a href='/faq'>FAQ</a>
        </li>
        <li className='navbar__item'>
          <a href='/community'>Community</a>
        </li>
      </ul>
    </nav>
  );
}
