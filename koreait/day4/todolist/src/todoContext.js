import React, { useReducer, createContext, useContext, useRef, useState } from 'react';

const initialTodos = [
    {
        id:1,
        text:"프론트엔드 프로젝트 만들기",
        done: false
    },
    {
        id:2,
        text:"밥 먹기",
        done: true
    },
    {
        id:3,
        text:"일기쓰기",
        done: false
    },
    {
        id:4,
        text:"운동하기",
        done: true
    }
];

//state: 상태 변화값, todos배열의 상태를 관리할 것이다
//action: 어떤 변화인지
function todoReducer(state, action){
    switch(action.type){
        //할 일 추가
        /* dispatch({
                type: 'CREATE',
                todo: {id: nextId.current, text: value, done: false }
            });
        */
        case 'CREATE':
            return state.concat(action.todo);
        //할일 완료 여부 토글
        //dispatch({type: 'TOGGLE', id});
        case 'TOGGLE':
            return state.map(todo => 
                todo.id == action.id ? {...todo, done: !todo.done} : todo);
        //휴지통 클릭시 삭제
        //dispatch({type: 'REMOVE', id});
        case 'REMOVE':
            return state.filter(todo => todo.id !== action.id);
        default:
            throw new Error(`${action.type}이 잘못 잔달됨`);
    }
}

//reducer가 관리하는 state와 dispatch를 전역에 있는 컴포넌트에 쓰이기 위해서 context가 필요
const TodoStateContext = createContext(); //state관리
const TodoDispatchContext = createContext(); //dispatch관리
const TodoNextIdContext = createContext(); //nextId관리

export function TodoProvider({children}){
    const [state, dispatch] = useReducer(todoReducer, initialTodos);
    const nextId = useRef(5);

    return (
        <TodoStateContext.Provider value={state}>
            <TodoDispatchContext.Provider value={dispatch}>
                <TodoNextIdContext.Provider value={nextId}>
                    {children}
                </TodoNextIdContext.Provider>
            </TodoDispatchContext.Provider>
        </TodoStateContext.Provider>
    );
}

//외부 컴포넌트가 Provider로 감싸있다면 useContext()를 통해 context의 관리를 받을 수 있다. 
//context의 관리라는 것은 reducer를 통해 액션에 따른 상태관리이다.
/*
    import React, {useContext} from 'react';
    import {TodoStateContext, TodoDispatchContext} from '/TodoContext'

    function Sample(){
        const state = useContext(TodoStateContext);
    }
*/
export function useTodoState(){
    const context = useContext(TodoStateContext);
    if(!context){ throw new Error('TodoProvider를 찾을 수 없음'); }
    return context;
}

export function useTodoDispatch(){
    const context = useContext(TodoDispatchContext);
    if(!context){ throw new Error('TodoProvider를 찾을 수 없음'); }
    return context;
}

export function useTodoNextId(){
    const context = useContext(TodoNextIdContext);
    if(!context){ throw new Error('TodoProvider를 찾을 수 없음'); }
    return context;
}