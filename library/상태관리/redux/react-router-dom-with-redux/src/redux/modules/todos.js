// 액션 타입
export const ADD_TODO = "ducks-patter/todos/ADD_TODO";
export const COMPLETE_TODO = "ducks-patter/todos/COMPLETE_TODO";

//액션 생성함수
export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    }
}

// 초기값
const initialState = [];

// 리듀서
export default function reducer(prevState=initialState, action) {

    if(action.type === ADD_TODO) {
        return [...prevState, {text: action.text, done: false}]
    }
  
    if(action.type === COMPLETE_TODO) {
        return prevState.map((todo, index) => {
            if(index === action.index) {
                return {...todo, done: true}
            }

            return todo
        })
    }

    return prevState;
}