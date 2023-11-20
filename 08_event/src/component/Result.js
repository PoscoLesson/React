export default function Result(props) {
  const { fruit, backgroundColor, color, content } = props.data;

  return (
    <div>
      <img src={`${fruit}.png`} alt={fruit} width={100} height={100} />

      <div
        style={{
          padding: '10px',
          marginTop: '10px',
          backgroundColor: `${backgroundColor}`,
          color: `${color}`,
        }}
      >
        {content}
      </div>
    </div>
  );
}
