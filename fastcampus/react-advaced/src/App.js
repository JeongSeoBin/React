import React from "react";

class Foo extends React.Component {
  componentDidMount() {
    console.log("foo componentDidMount", this.props.children);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount foo");
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    console.log("foo getDerivedStateFromProps", nextProps, prevProps);
    return {};
  }

  render() {
    console.log("foo render", this.props.children);
    return <p>foo</p>;
  }
}

class App extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);
  }

  render() {
    if (this.state.count % 2 === 0) {
      return (
        // componentDidMount와 componentWillUnmount가 반복하며 로그가 출력된다
        // 같은 컴포넌트여도 이를 감싸는 상위컴포넌트가 다르므로 다른 컴포넌트로 취급한다
        // 따라서 컴포넌트를 랜더하고 상태변경에 따라 업데이트하는 것이 아니라 컴포넌트가 계속 새로 생성되고 사라지는 것이 반복된다
        // <div>
        //   <Foo/>
        // </div>

        // 같은 앨리먼트인데 attribute 값만 다른 경우 다른 attribute만 바뀐다
        // <div className="before" title="stuff"></div>

        // color만 바뀐다
        // <div style={{color: "red", fontWeight: "bold"}}></div>

        // props가 변경되면 실행되는 getDerivedStateFromProps가 실행되고 다시 랜더
        // <Foo name="mark"/>

        // <Foo>third</Foo>만 componentDidMount와 componentWillUnmount가 반복하며 로그가 출력된다
        // <ul>
        //   <Foo>first</Foo>
        //   <Foo>second</Foo>
        // </ul>

        // <Foo>first</Foo>만 componentDidMount와 componentWillUnmount가 반복 x
        // <Foo>third</Foo>만 componentDidMount와 componentWillUnmount가 반복하며 로그가 출력된다
        // <Foo>second</Foo> == 아래 <Foo>first</Foo>, <Foo>third</Foo> == 아래 <Foo>second</Foo>와 같이 순서대로 비교
        // 정확하게 서로 같은건지 판단하기 위해 key props를 이용한다
        <ul>
          <Foo key="2">second</Foo>
          <Foo key="3">third</Foo>
        </ul>
      );
    }

    return (
      // <span>
      //   <Foo/>
      // </span>

      // <div className="after" title="stuff"></div>

      // <div style={{color: "blue", fontWeight: "bold"}}></div>

      // <Foo name="hanana"/>

      // <ul>
      //     <Foo>first</Foo>
      //     <Foo>second</Foo>
      //     <Foo>third</Foo>
      // </ul>

      <ul>
        <Foo key="1">first</Foo>
        <Foo key="2">second</Foo>
        <Foo key="3">third</Foo>
      </ul>
    );
  }
}

export default App;
