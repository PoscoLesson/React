export default function Attribute() {
  const handleClick = () => {
    console.log('JSX onClick 예시');
  };

  return (
    <>
      {/* HTML 예시 (사용 X) */}
      {/* <div class='active'>JSX Attribute 작성 시 camelCase</div> */}
      {/* <div onclick='handleClick()'>JSX Attribute 작성 시 camelCase</div> */}

      {/* JSX 예시 */}
      <div className='active'>JSX Attribute 작성 시 camelCase</div>
      <div onClick={handleClick}>JSX Attribute 작성 시 camelCase</div>
    </>
  );
}
