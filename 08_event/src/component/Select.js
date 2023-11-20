export default function Select(props) {
  const setData = props.setData;

  const handleSelectChange = (dataType) => (e) => {
    const value = e.target.value;
    setData((data) => ({ ...data, [dataType]: value }));
  };

  return (
    <>
      과일 :
      <select
        // 방법 1.
        // onChange={(e) => {
        //   // props.setFruit(e.target.value);
        // }}
        // 방법 2.
        onChange={handleSelectChange('fruit')}
      >
        <option value='apple'>사과</option>
        <option value='banana'>바나나</option>
        <option value='peach'>복숭아</option>
        <option value='orange'>오렌지</option>
      </select>
      배경색 :
      <select
        // 방법 1.
        // onChange={(e) => {
        //   props.setBackgroundColor(e.target.value);
        // }}
        // 방법 2.
        onChange={handleSelectChange('backgroundColor')}
      >
        <option value='black'>검정</option>
        <option value='white'>하양</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
      글자색 :
      <select
        // 방법 1.
        // onChange={(e) => {
        //   // props.setColor(e.target.value);
        // }}
        // 방법 2.
        onChange={handleSelectChange('color')}
      >
        <option value='white'>하양</option>
        <option value='black'>검정</option>
        <option value='red'>빨강</option>
        <option value='orange'>주황</option>
        <option value='yellow'>노랑</option>
        <option value='green'>초록</option>
        <option value='blue'>파랑</option>
        <option value='purple'>보라</option>
        <option value='pink'>분홍</option>
      </select>
    </>
  );
}
