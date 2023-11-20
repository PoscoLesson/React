import { Component } from 'react';

export default class GreetingClass extends Component {
  // constructor 키워드 사용
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       message: '안녕하세요.',
  //     };
  //   }

  // 클래스 내부에서 state를 초기화해 state 사용
  state = {
    message: '안녕하세요.',
  };

  render() {
    return (
      <>
        <div>{this.state.message}</div>
        <button
          onClick={() => {
            this.setState({ message: '안녕히가세요.' });
          }}
        >
          click
        </button>
      </>
    );
  }
}
