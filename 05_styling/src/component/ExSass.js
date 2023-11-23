import '../style/exSass.scss';

export default function ExSass() {
  return (
    <>
      <p>$ 변수 사용 예시</p>
      <span>부분 파일과 @import 사용 예시</span>
      <button className='btn-primary'>mixin 사용 예시 1</button>
      <button className='btn-danger'>mixin 사용 예시 2</button>
      <nav>
        <ul className='navbar'>
          <li className='item'>
            <a href='/'>Home</a>
          </li>
          <li className='item'>
            <a href='/faq'>FAQ</a>
          </li>
          <li className='item'>
            <a href='/community'>Community</a>
          </li>
        </ul>
      </nav>
      <div className='box'>확장 사용 예시</div>
      <div className='box-extend'>box-extend</div>
    </>
  );
}
