import styled from 'styled-components';

export default function ExStyledComponents() {
  return (
    <>
      <NewDiv>Hello World</NewDiv>
      <UseAgainNewDiv>use again</UseAgainNewDiv>
      <PropsDiv color='green' bgcolor='lightgray' value='text'>
        Props Styled
      </PropsDiv>
    </>
  );
}

// styled-component를 사용해 스타일이 지정된 컴포넌트 만들기
const NewDiv = styled.div`
  width: 100px;
  height: 100px;
  color: blue;
  background-color: yellow;
`;

// 이미 만들어진 styled-component의 스타일 상속받기
const UseAgainNewDiv = styled(NewDiv)`
  border: 5px solid pink;
  border-radius: 10px;
`;

// props로 속성값 전달 받기, 조건문 사용
const PropsDiv = styled.div`
  width: 100px;
  height: 100px;

  /* 전달 받은 props를 바로 사용 */
  color: ${(props) => props.color};

  /* bgcolor라는 props를 전달 받았다면 해당 props 사용, 없다면 'pink' 사용 */
  background-color: ${(props) => props.bgcolor || 'pink'};

  /* value라는 props가 문자열이라면 글자 크기 20px 이외에는 50px */
  font-size: ${(props) => {
    if (typeof props.value === 'string') {
      return '20px';
    }
    return '50px';
  }};
`;
