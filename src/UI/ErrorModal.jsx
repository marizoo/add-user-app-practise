import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { centerIt } from "../globalStyle";
import Button from "./Button";
import Card from "./Card";

const BackdropContainer = styled.div`
width: 100vw;
height: 100vh;
background-color: #1d1d1d;
opacity: 0.8;
${centerIt};
position: fixed:
top: 0;
left: 0;
z-index: 5;
overflow: hidden;

`

const Backdrop = () => {
    return (
        <BackdropContainer />
    )
    
}

const ModalContainer = styled.div`
height: 100vh;
width: 100vw;
background: transparent;
position: fixed;
top: 0;
left: 0;

${centerIt};
z-index: 6;
overflow: hidden;
`

const Title = styled.h2`
color: purple;
margin-top: 20px;
`

const Message = styled.p``


const Modal = ({title, message, onCloseOverlay}) => {
    return (
    <ModalContainer>
        <Card>
            <Title>{title}</Title>
            <Message>{message}</Message>
            <Button onClick={onCloseOverlay}>Okay</Button>
        </Card>
    </ModalContainer>
    )
}


export const ErrorModal = ({title, message, onCloseOverlay}) => {
return (
    <>
    {ReactDOM.createPortal(
        <Backdrop onClick={onCloseOverlay} />,
        document.getElementById('overlay-root')
    )}
    {ReactDOM.createPortal(
        <Modal onCloseOverlay={onCloseOverlay} title={title} message={message} />,
        document.getElementById('modal-root')
    )}
    </>
)
}