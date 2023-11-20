import PropTypes from 'prop-types';

export default function RenderPersonInfo(props) {
  return (
    <>
      <h1>
        {props.children} {props.name}
      </h1>
      <div>
        성함: {props.name} 나이: {props.age} 성별: {props.gender}
      </div>
    </>
  );
}

RenderPersonInfo.defaultProps = {
  name: '코딩온',
};

RenderPersonInfo.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired,
  gender: PropTypes.string.isRequired,
};
