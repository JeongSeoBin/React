import React from "react";
import autobind from "autobind-decorator";

export default class Button extends React.Component {
  render() {
    return <button onClick={this.click}>click</button>;
  }

  // @autobind: 화살표 함수가 아닌 형식으로 작성하여도 자동으로 bind해줌
  @autobind
  click() {
    console.log("click");
  }
}
