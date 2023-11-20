export default function Default(props) {
  return <div>{props.data}의 기본값은 안녕하세요.</div>;
}

Default.defaultProps = {
  data: '안녕하세요.',
};
