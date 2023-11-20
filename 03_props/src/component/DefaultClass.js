import React, { Component } from 'react';

export default class DefaultClass extends Component {
  render() {
    return <div>{this.props.data} 기본값 지정</div>;
  }
}

DefaultClass.defaultProps = {
  data: '클래스형 컴포넌트',
};
