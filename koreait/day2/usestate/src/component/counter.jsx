//리엑트 패키지에서 useState hooks를 불러옴
import React, { useState } from 'react'; 

function Counter(){
    //number는 변수, setNumber는 setter함수
    //useState(0): number를 0으로 초기화
    const [number, setNumber] = useState(0);

    //이벤트 핸들러
    const plus = () => {
        //number에 1더한 값으로 number를 set
        setNumber(number + 1);
        console.log('1 더했어');
    }
    const minus = () => {
        //number에 1뺀 값으로 number를 set
        setNumber(number - 1);
        console.log('1 뺐어');
    }

    return (
        <div>
            {/* setNumber()를 통해 number의 상태를 변경하면 useState는 이를 감지하여 화면 랜더링을 다시 한다 */}
            <h2>{number}</h2>
            {/* 이벤트 등록 */}
            <button onClick={plus}>더하기</button>
            <button onClick={minus}>빼기</button>
        </div>
    );
}

export default Counter;