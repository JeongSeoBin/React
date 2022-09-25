import React from 'react';
//Hello컴포넌트를 가져다 쓰겠다
import Hello from './Hello';

function App(){
  //jsx문법
  //여러줄 작성시 ()로 묶는다
  return (
    // <Hello>를 루트로 사용하기 위해 <></>로 감쌀 수 있다
    <>
      {/* Hello컴포넌트를 화면에 보여준다 */}
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
      <Hello/>
    </>
  )
}

export default App;
