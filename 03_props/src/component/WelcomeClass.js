import React, { Component } from "react";

export default class WelcomeClass extends Component {
  render() {
    return (
      <>
        <div>{this.props.name}님, 환영합니다!</div>
        <div>{this.props.children}</div>
      </>
    );
  }
}
