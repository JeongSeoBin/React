import React from "react";

// 클래스 컴포넌트애서 state관리
export default class Example1 extends React.Component {
    state = {
        count: 0
    }

    click = () => {
        this.setState({count: this.state.count + 1})
    }


    render() {
        const {count} = this.state;

        return (
            <div>
                <div>clicked {count} times </div>
                <button onClick={this.click}>click</button>
            </div>  
        )
    }
}