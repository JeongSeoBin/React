import React from 'react';

//값을 전달받는 방법 1
//props를 통해 값을 객체형태로 전달받는다
//props = {color:'gold', name:'apple'}
// function Hello(props){
//     //{{}} : css의 {}와 자바스크립트 삽입을 위한 {}
//     return <div style={{color: props.color}}>안녕하세요 {props.name}</div>
// }

//값을 전달받는 방법 2
//객체형태로 직접 전달받는다(비구조화 할딩)
function Hello({color, name, isSpecial}){
    return (
        <div style={{color}}>
            {/* 조건부 랜더링 */}
            {/* {isSpecial ? <b>☆</b> : null} 안녕하세요 {name} */}
            {isSpecial && <b>☆</b>} 안녕하세요 {name}
        </div>
    )
}

//전달받은 값이 없을때 default설정
Hello.defaultProps = {
    color: 'pink',
    name: '무명'
}

export default Hello;