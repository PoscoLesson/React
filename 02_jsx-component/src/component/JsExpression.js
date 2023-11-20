export default function JsExpression() {
  const title = 'JSX 및 Components 기초';
  const imgPath = './img.png';

  return (
    <>
      {/* Javascrip 표현식 사용 시 중활호{}로 감싸 사용 */}
      <h1>{title}</h1>

      {/* Attribute(속성)에서도 중괄호 사용해 Javascript 표현식 사용 가능 */}
      <img src={imgPath} />
    </>
  );
}
