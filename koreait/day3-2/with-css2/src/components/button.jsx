import React from 'react';
import styled, {css} from 'styled-components';
import {darken, lighten} from 'polished';

//styled-component 내 스타일 중 일부를 따로 분리
const colorStyles = css`
    ${({theme, color}) => {
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover {
                background: ${lighten(0.1, selected)}
            };
            &:active {
                background: ${darken(0.1, selected)}
            }`;
    }}
`;

const sizeStyles = css`
    ${props => 
        props.size === 'large' &&
        css`
            height: 3rem;
            font-size: 1.25rem;
        `
    }
    ${props => 
        props.size === 'medium' &&
        css`
            height: 2.25rem;
            font-size: 1rem;
        `
    }
    ${props => 
        props.size === 'small' &&
        css`
            height: 1.75rem;
            font-size: 0.8rem;
        `
    }
`;

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

    ${sizeStyles}

    ${colorStyles}

    & + & {
        margin-left: 1rem
    }
`;

Button.defaultProps = {
    color: 'blue',
    size: 'medium'
}

function Button({children, ...rest}){
    return <StyledButton {...rest}>{children}</StyledButton>
}

export default Button;