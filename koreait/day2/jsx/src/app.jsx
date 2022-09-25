import React from 'react';
import Hello from './component/hello.jsx';
import Wrapper from './component/wrapper';
import './app.css';

function App() {
  //jsx문법과 자바스크립트문법을 사용할 수 있다
  const name='apple';

  //jsx태그에 적용할 스타일을 변수에 저장
  //카멜표기법을 사용해야한다
  const style = {
    backgroundColor: 'deepskyblue',
    color: 'white',
    fontSize: 40,
    padding: '1rem'
  }
  
  return (
    <>
      {/* wrapper태그가 감싼 태그들을 wrapper컴포넌트에게 전달하고 wrapper컴포넌트에서는 chilren으로 받는다 */}
      <Wrapper>
        {/* jsx에서 자바스크립트 변수를 사용할땐 {}안에 작성 */}
        <div>{name}</div>
        {/* 태그에 스타일 적용하는 방법 */}
        <div style={style}>hello</div>
        {/* 태그에 css클래스 설정하는 방법 */}
        <div className="deeppink-box">hello</div>
        {/* 컴포넌트에게 값을 전달하고 컴포넌트에서는 props로 값을 받는다 */}
        <Hello name="apple" color="gold" isSpecial={true}/>
        <Hello name="banana" color="yellowgreen"/>
        <Hello/>
      </Wrapper>
    </>
  );
}

export default App;
