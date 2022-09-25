import React from 'react';
import './button.scss';
import classNames from 'classnames';

//이벤트 관련된 것은 ...rest로 받는다
function Button({children, size, color, outline, fullWidth, ...rest}){
    //className 값을 props.size로 넘어 온 값으로 동적으로 지정
    // return <button className={['Button', size, color].join(' ')}>{children}</button>
    
    //classnames 모듈 사용시
    //{outline, fullWidth}: true가 넘어오면 className에 추가
    //...rest안에는 "onClick= ... onMouseMove=...와 같은 값이 넘어온다"
    return <button className={classNames('Button', size, color, {outline, fullWidth})} {...rest}>{children}</button>
}

Button.defaultProps = {
    size: 'medium',
    color: 'blue'
};

export default Button;
