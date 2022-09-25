import { useReducer } from "react"

export default function Example6() {
    // reducer
    // state를 변경하는 로직이 담겨있는 함수
    // action에 따라 state를 변경하여 새로운 state를 반환하는 함수
    // state: preveState, action: 객체이고 필수 프로퍼티로 type을 가진다
    const reducer = (state, action) => { 
        if(action.type === 'PLUS'){
            return {
                count: state.count + 1
            }
        }
        
        return state
    }

    const [state, dispatch] = useReducer(reducer, {count: 0});

    const click = () => {
        // dispatch
        // action을 발생시키는 함수
        // 해당 action에 따라 reducer가 처리
        dispatch({type: 'PLUS'})
    }

    return (
        <div>
            <p>clicked {state.count} times</p>
            <button onClick={click}>click me</button>
        </div>
    )
}