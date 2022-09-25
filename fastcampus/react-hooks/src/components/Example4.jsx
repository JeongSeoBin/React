import React from "react";

// 클래스 컴포넌트에서 componentDidMount, componentDidUpdate
export default class Example4 extends React.Component {
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

    componentDidMount() {
        console.log('componentDidMount', this.state.count);
    }

    componentDidUpdate() {
        console.log('componentDidUpdate', this.state.count);
    }
}