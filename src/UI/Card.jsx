import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const Container = styled.div`
width: 600px;
background-color: white;
border-radius: 10px;
margin: 20px;
${columnIt};
justify-content: center;
align-items: center;
`;


const Card = (props) => {
    return (
        <Container>
            {props.children}   
        </Container>
    )
}

export default Card
