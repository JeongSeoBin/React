import React from 'react';
import './button.scss';
import classNames from 'classnames';

//디자인 옵션(색상, 크기, 테두리, 너비)을 props로 넘겨 받고 넘겨받은 값에 따라 className을 지정해주고
//sass에서 className에 따른 디자인을 프로그래밍한다
function Button({children, size, color, outline, fullWidth}){
    return (
        // <button className={`Button ${size} ${color}`}>{children}</button>
        //classNames('Button', {outline: true}); => 'Button outline'
        <button className={classNames('Button', size, color, {outline, fullWidth})}>{children}</button>
    )
}

Button.defaultProps = {
    size: 'medium',
    color: 'pink'
}

export default Button;