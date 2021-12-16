import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const Container = styled.button`
padding: 10px;
background-color: purple;
color: white;
border-radius: 10px;
${centerIt};
width: 30%;
margin: 15px;
`;


const Button = (props) => {
    return (
        <Container type={props.type || "button"} onClick={props.onClick}>
            {props.children}
        </Container>
    )
}

export default Button
