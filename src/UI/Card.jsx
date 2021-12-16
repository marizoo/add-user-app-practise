import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const Container = styled.div`
${columnIt}
align-items: center;
background-color: white;
margin: 15px;
padding: 20px;
border-radius: 10px;
width: 700px;
`;



const Card = (props) => {
    return (
        <Container>
           
                {props.children}
            
        </Container>
    )
}

export default Card
