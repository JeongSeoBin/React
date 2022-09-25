import React, {useRef} from 'react';

function TodoAddForm({onAdd}){
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit = e => {
        e.preventDefault();
        const name = inputRef.current.value;
        name && onAdd(name);
        formRef.current.reset();
    }

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input ref={inputRef} type="text" className="add-input" placeholder="할일을 입력하세요"/>
            <button className="add-button">확인</button>
        </form>
    )
}

export default TodoAddForm;