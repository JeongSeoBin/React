import React from 'react';

//children이 <wrapper>로 감싼 태그들을 전달받는다
function Wrapper({children}){
    const style = {
        border: '3px solid red',
        padding: '10px'
    };

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default Wrapper;