import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class DataTypeClass extends Component {
  // static 키워드 사용
  //   static propTypes = {
  //     data: PropTypes.string,
  //   };

  render() {
    return <div>{this.props.data}의 데이터 타입은 문자열 입니다.</div>;
  }
}

// 클래스에 바로 props의 데이터 타입 선언
DataTypeClass.propTypes = {
  // data라는 props의 데이터 타입만 지정
  data: PropTypes.string,
  // data라는 props의 데이너 타입 지정, 필수값 지정
  data: PropTypes.string.isRequired,
};
