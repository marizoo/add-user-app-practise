import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { centerIt } from "../globalStyle";
import Button from "./Button";
import Card from "./Card";


const Title = styled.h2`
color: purple;
`
const Message = styled.p``


const BackdropContainer = styled.div`
height: 100vh;
width: 100vw;
position: fixed;
top: 0;
left: 0;
z-index: 100;
background; pink;
opacity: 0.9;

`

const ModalCard = styled.div`
position: fixed;
top: 30vh;
left: 7%;
width: 80%; 
z-index: 101;
overflow: hidden;
${centerIt};
`



const Backdrop = ({onCloseModal}) => {
    return (
        <BackdropContainer />   
    )
    };
    

const ModalOverlay = ({title, message, onCloseError}) => {
    return (
        
            <ModalCard>
                <Card>
                <Title>{title}</Title>
                <Message>{message}</Message>
                <Button onClick={onCloseError}>Okay</Button>
                </Card>
            </ModalCard>
        
    )
}

export const ErrorModal = ({onCloseError, title, message}) => {
    return (
        <>
        {ReactDOM.createPortal(
            <Backdrop onCloseError={onCloseError}/>,
            document.getElementById('backdrop-root')
        )}
        {ReactDOM.createPortal(
            <ModalOverlay onCloseError={onCloseError} title={title} message={message}/>,
            document.getElementById('overlay-root')
        )}
        </>
        
         )
}

