//React문법을 사용하겠다
import React from 'react';

//함수로 컴포넌트 만들기
//함수명과 파일명과 일치해야한다
function Hello(){
    return <div>안녕하세요 React!</div>
}

//외부로 컴포넌트 내보내기
//파일이름과 함수이름과 동일하게 작성
export default Hello;