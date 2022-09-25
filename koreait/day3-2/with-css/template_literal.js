const name = '김사과';
const message = `안녕 ${name}`;
console.log(message);// 안녕 김사과

const obj = {num: 1}
const text = `${obj}`;
console.log(text);// [object Object]  

const func1 = () => true;
const msg = `${func1}`;
console.log(msg);// () => true