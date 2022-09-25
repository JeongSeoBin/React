import React from "react";

// 함수형 컴포넌트에서 useEffect를 통해 라이프사이클 메서드 구현
export default function Example5() {
  const [count, setCount] = React.useState(0);

  // 랜더될때마다 실행
  // React.useEffect(() => {
  //     console.log('componentDidMount & componentDidUpdate', count)
  // })

  // 최초 랜더링될때만 실행
  // componentDidMount일때 실행
  React.useEffect(() => {
    console.log("componentDidMount");
  }, []);

  // 최초 랜더링될때와 dependency에 의해 리랜더링될때
  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);
  }, [count]);

  React.useEffect(() => {
    console.log("componentDidMount");

    return () => {
      // cleanup
      // componentWillUnmount일때 실행
      // 다음 dependency에 의한 실행 전에 실행
      // 하지만 dependency가 빈배열이므로 컴포넌트가 사라지기 전에만 이 함수가 호출되므로 componentWillUnmount역할을 할 수 있다
    };
  }, []);

  React.useEffect(() => {
    console.log("componentDidMount & componentDidUpdate by count", count);

    return () => {
      // cleanup
      // 다음 componentDidUpdate가 일어날때 실행되는 함수
      // update전 이전 상태값을 가져온다
      console.log("cleanup by count", count);
    };
  }, [count]);

  const click = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>clicked {count} times </div>
      <button onClick={click}>click</button>
    </div>
  );
}
