

const number = [1,2,3,4,5,6,7,8,9,10];
const val = 0;
const total = number.reduce((val1, val2, idx, arr) => {
    /*
        val1: 0, val2: 1
        val1: 1, val2: 2
        val1: 3, val2: 3
        val1: 6, val2: 4
        val1: 10, val2: 5
        val1: 15, val2: 6
        val1: 21, val2: 7
        val1: 28, val2: 8
        val1: 36, val2: 9
        val1: 45, val2: 10
    */
   console.log(`val: ${val}`)
    console.log(`val1: ${val1}, val2: ${val2}`);
    return val1 + val2;
}, val);

console.log(total);

/*
    reduce
    val1: reduce()함수의 두번째 파라미터 val값이 초기값이고 이후 리턴값이 넘어옴
    val2: number의 요소가 순차적으로 들어옴
    idx: reduce()함수의 두번째 파라미터인 val을 사용했는지 안했는지에 따라 값이 달라짐
    val을 사용했다면 0부터 시작, 사용하지 않았다면 1부터 시작
    arr: reduce()함수가 호출된 배열 number가 리턴
*/