import React from "react";

// 함수형 컴포넌트에서 객체형태로 state관리
export default function Example3() {
  const [state, setState] = React.useState({ count: 0 });

  const click = () => {
    setState({ count: state.count + 1 });
    // 외부에 있는 state에 의존하지 않고 함수 인자에 의존하여 함수 하나 작성만으로 state변경이 가능하다
    setState((state) => {
      return {
        count: state.count + 1,
      };
    });
  };

  return (
    <div>
      <div>clicked {state.count} times </div>
      <button onClick={click}>click</button>
    </div>
  );
}
