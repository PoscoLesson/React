export default function PostItem(props) {
  const { title, writer, content } = props.post;

  return (
    <>
      <h4>제목: {title}</h4>
      <div>작성자: {writer}</div>
      <div>내용: {content}</div>
      <button onClick={props.onDelete}>삭제</button>
    </>
  );
}
