import React, {useReducer} from 'react';

//reducer: 액션에 따른 처리를 하는 함수
function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){
    //useReducer를 이용한 상태관리
    //const [state, dispatch] = useReducer(reducer, initialState);
    const [number, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        //dispatch: 액션을 발생시키는 함수
        dispatch({type:'INCREMENT'});
    };

    const onDecrease = () => {
        dispatch({type:'DECREMENT'});
    }

    return (
        <div>
            <h2>{number}</h2>
            <button onClick={onIncrease}>1 더하기</button>
            <button onClick={onDecrease}>1 빼기</button>
        </div>
    )
}

export default Counter;