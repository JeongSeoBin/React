//styled-components 라이브러리 내에서 사용하는 문법
//tagged template literal: ${}사용하는 문법

const name = "김사과";
const message1 = `안녕, ${name}`;

console.log(message1);

//Template literal을 사용할때 ${}안에 객체를 넣는다면
//=> object라고 출력
const obj = {num:1};
const message2 = `${obj}`;

console.log(message2);

//Template literal을 사용할때 ${}안에 함수를 넣는다면
//=> 함수 모양 출력
const fn = () => true
const message3 = `${fn}`;

console.log(message3);

//함수나 객체 껍데기가 아닌 안에 값을 출력하려면
const red = "빨간색";
const blue = "파란색";

function favoriteColors(texts, ...values){
    //console.log(texts);//[ '제가 좋아하는 색은 ', '와 ', '입니다' ]
    //console.log(values);//[ '빨간색', '파란색' ]

    //문자를 누적하는 방식
    //result는 이전 누적 문자열이고 text는 배열 요소
    return texts.reduce((result, text, i) => `${result}${text}${values[i] ? `<b>${values[i]}</b>` : ''}`, '');
}

console.log(favoriteColors`제가 좋아하는 색은 ${red}와 ${blue}입니다`);