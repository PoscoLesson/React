function ComponentA() {
  return <div>Component A</div>;
}

function ComponentB() {
  return <div>Component B</div>;
}

function ComponentC() {
  return <div>Component C</div>;
}

export default function Switch(props) {
  switch (props.condition) {
    case 'A':
      return <ComponentA />;
    case 'B':
      return <ComponentB />;
    case 'C':
      return <ComponentC />;
    default:
      return <div>Default component</div>;
  }
}
