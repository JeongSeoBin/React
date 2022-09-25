import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

//styled-components 생성
const StyledButton = styled.button`
    display: inline-block;
    outline: none;
    border: none;
    border-radius: 4px;
    color: white;
    font-weight: bold;
    cursor: pointer;
    padding-left: 1rem;
    padding-right: 1rem;

    height: 2.25rem;
    font-size: 1rem;

    ${props => {
        // ThemeProvider에서 정의한 색상 팔레트 사용
        const selected = props.theme.palette[props.color];
        return css `
            background: ${selected};
            &:hover {
                // sass의 lighten(), darken()함수를 polished의 유틸함수로 구현하기
                background: ${lighten(0.1, selected)}
            };
            &:active {
                background: ${darken(0.1, selected)}
            }`;
    }}

    & + & {
        margin-left: 1rem
    }
`;

Button.defaultProps = {
    color: 'blue'
}

function Button({children, ...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button;