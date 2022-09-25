import React from 'react';
import Todo from './todo';
import TodoAddForm from './todoAddForm';

function Todos({todos, onIncrement, onDecrement, onDelete, onAdd, onReset}) {
    return (
        <div classNme="todos">
            <TodoAddForm onAdd={onAdd}/>
            <ul>
                {
                    todos.map(todo => (
                        <Todo
                            todo={todo}
                            onIncrement={onIncrement}
                            onDecrement={onDecrement}
                            onDelete={onDelete}
                        />
                    ))
                }
            </ul>
            <button className="todos-reset" onClick={onReset}>초기화</button>
        </div>
    );
}

export default Todos;