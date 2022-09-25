import React from "react";
import autobind from "autobind-decorator";

export default class Button extends React.Component {
  render() {
    return <button onClick={this.click}>click</button>;
  }

  @autobind
  click() {
    console.log("clicked");
  }
}
