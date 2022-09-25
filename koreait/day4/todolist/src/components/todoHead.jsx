import React from 'react';
import styled from 'styled-components';
import {useTodoState} from '../todoContext';

const TodoHeadBlock = styled.div`
    padding: 48px 32px 24px 32px;
    border-bottom: 1px solid #e9ecef;

    h1{
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day{
        margin-top: 4px;
        color: #868e96;
        font-size: 21px;
    }

    .tasks-left{
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead(){
    //useContext()를 이용하여 context가 관리하는 state를 이용할 수 있다
    //context가 관리하는 state는 reducer가 관리하는 todos배열이다 
    //따라서 전역에서 todos 배열을 가져다 쓰고 이 배열의 변화에 따라 리랜더링이 가능
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    //우리나라 날짜 요일 방식으로
    const dateString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'});

    return(
        <TodoHeadBlock>
            <h1>{dateString}</h1>
            <div className="day">{dayName}</div>
            <div className="tasks-left">할 일 {undoneTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead;