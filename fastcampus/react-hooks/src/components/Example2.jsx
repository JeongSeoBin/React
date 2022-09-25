import React from "react";

// 함수형 컴포넌트에서 하나의 state관리
export default function Example2() {
    const [count, setCount] = React.useState(0)

    const click = () => {
        // state변경 후 리랜더링
        setCount(count+1)
    }

    return (
        <div>
            <div>clicked {count} times </div>
            <button onClick={click}>click</button>
        </div>  
    )    
}