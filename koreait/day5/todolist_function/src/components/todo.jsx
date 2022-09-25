import React from 'react';

function Todo({todo, onIncrement, onDecrement, onDelete}){
    const {name, count} = todo;

    const handleIncrement = () => {
        onIncrement(todo);
    }

    const handleDecrement = () => {
        onDecrement(todo);
    }

    const handleDelete = () => {
        onDelete(todo);
    }

    return (
        <li className="todo">
            <span className="todo-name">{name}</span>
            <span className="todo-count">{count}</span>
            <button className="todo-button todo-increase" onClick={handleIncrement}>+</button>
            <button className="todo-button todo-decrease" onClick={handleDecrement}>-</button>
            <button className="todo-button todo-delete" onClick={handleDelete}>삭제</button>
        </li>
    )
}

export default Todo;