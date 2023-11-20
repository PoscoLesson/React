export default function PropsChildren(props) {
  return (
    <>
      <div>{props.data} : props로 전달받은 data</div>
      <div>{props.children}</div>
    </>
  );
}
