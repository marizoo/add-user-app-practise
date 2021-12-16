import React from 'react'
import styled from 'styled-components';
import { centerIt } from '../globalStyle';

const Container = styled.button`
font-size: 18px;
padding: 10px;
margin: 15px;
background-color: purple;
color: white;
border: none;
border-radius: 10px;
width: 35%;
cursor: pointer;
${centerIt};
`;


const Button = (props) => {
    return (
        <Container onClick={props.onClick} type={props.type || "button"}>
            {props.children}
        </Container>
    )
}

export default Button
