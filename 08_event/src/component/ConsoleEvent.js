export default function ConsoleEvent() {
  const handleClick = (event) => {
    console.log('React SyntheticEvent:', event);
    console.log('nativeEvent:', event.nativeEvent);

    console.log('Client X:', event.nativeEvent.clientX);
    console.log('Client Y:', event.nativeEvent.clientY);
  };

  return <button onClick={handleClick}>Click Me</button>;
}
