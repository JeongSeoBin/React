import React from "react";

class UnCotrolledComponent extends React.Component {
  inputRef = React.createRef();

  click = () => {
    // dom에 직접 접근하여 dom을 변주하거나 값을 읽어 오는 것은 react에서 지양한다
    // const input = document.querySelector("#my-input");
    // console.log(input.value);

    // input을 참조하고 있는 ref에서 현재 값을 꺼내와 사용
    console.log(this.inputRef.current.value);
  };

  render() {
    console.log("render", this.inputRef); // {current: null}

    return (
      <div>
        {/* <input id="my-input" /> */}

        <input ref={this.inputRef} />
        <button onClick={this.click}>전송</button>
      </div>
    );
  }

  componentDidMount() {
    // render가 된 후 참조값이 저장된다
    console.log("componentDidMount", this.inputRef); // {current: input}
  }
}

export default UnCotrolledComponent;
