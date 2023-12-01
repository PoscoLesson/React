// todo, memo 페이지에서 사용하는 유저의 입력을 받는 Input
export default function Input(props) {
  const { state, setState, handleAddItem } = props;
  return (
    <section className='section'>
      <input
        type='text'
        value={state}
        onChange={(e) => setState(e.target.value)}
        placeholder='내용'
      />
      <button className='add-btn' onClick={handleAddItem}>
        +
      </button>
    </section>
  );
}
