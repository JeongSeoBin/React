import React, {Component} from 'react';

class TodoAddForm extends Component{

    formRef = React.createRef();
    inputRef = React.createRef();

    onSubmit = event => {
        //submit의 본래 기능 제거
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    }

    render(){
        return (
            <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                <input ref={this.inputRef} type="text" className="add-input" placeholder="할일을 적어주세요"/>
                <button className="add-button">확인</button>
            </form>
        );
    }
}

export default TodoAddForm;
