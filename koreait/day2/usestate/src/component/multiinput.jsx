import React, { useState, useRef } from 'react';

function MultiInput(){
    //usestate 여러개 만들기
    const [inputs, setInputs] = useState({
        userid: '',
        name: ''
    });

    //비 구조화 할당을 통해 값을 전달
    //inputs에서 userid와 name을 가져옴
    const {userid, name} = inputs;

    //특정 dom에 접근할 수 있는 객체 생성
    const useridInput = useRef()

    const onChange = (e) => {
        //e.target에서 name과 value를 가져옴
        const {value, name} = e.target;
        setInputs({
            //... : inputs객체를 복사한다 (spread 문법)
            //데이터의 변화를 알기 위해 기존거는 유지하고 복사본을 변경
            ...inputs,
            //name키를 가진 값을 value로 설정
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            userid: '',
            name: ''
        });

        useridInput.current.focus();
    };

    return (
        <div>
            {/* useRef객체가 접근할 dom요소로 등록 */}
            <input name="userid" onChange={onChange} placeholder="아이디" value={userid} ref={useridInput}/>
            <input name="name" onChange={onChange} placeholder="이름" value={name}/>
            <button onClick={onReset}>지우기</button>
            <div>
                <b>아이디 : {userid}</b>, <b>이름 : {name}</b>
            </div>
        </div>
    )
}

export default MultiInput;