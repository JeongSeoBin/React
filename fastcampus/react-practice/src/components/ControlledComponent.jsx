import React from "react";

class ControlledComponent extends React.Component {
  state = {
    value: "",
  };

  change = (event) => {
    this.setState({ value: event.target.value });
  };

  click = () => {
    // 클릭시 입력한 값을 서버로 보내야 한다면
    // state의 value와 input의 value가 동일하기 때문에 input 태그에 직접 접근할 필요없이 state값을 가져오면 된다
    console.log(this.state.value);
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <input value={value} onChange={this.change} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }
}

export default ControlledComponent;
