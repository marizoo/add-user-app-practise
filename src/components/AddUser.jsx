import React, {useState, useRef} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';
import Button from '../UI/Button';
import { ErrorModal } from '../UI/ErrorModal';

const Container = styled.div`
width: 90%;
${columnIt};
`;

const Form = styled.form`
width: 100%;
${columnIt};
`

const Label = styled.label`
font-size: 18px;
font-weight: 500px;
margin-bottom: 5px;
`

const Input = styled.input`
font-size: 18px;
font-weight: 300px;
margin-bottom: 15px;
border: 1px solid rgba(0, 0, 0, 0.7);
border-radius: 10px;
width: 100%;
height: 35px;
padding-left: 10px;
`

const ButtonContainer = styled.div`
${centerIt}
width: 100%;
`


const AddUser = ({onNewDatas, onCloseForm}) => {
    
    const nameInputRef = useRef();
    const  ageInputRef = useRef();
    const [errors, setErrors] = useState()

    const submitHandler = (ev) => {
        ev.preventDefault();

    

    const addedName = nameInputRef.current.value;
    const addedAge = ageInputRef.current.value;

    if(addedName.trim().length === 0 || addedAge.trim().length === 0 ){
        setErrors({
            title: "Oh No.....",
            message: "Please enter valid username"
        })
        return;
    }

    if(+addedAge < 0 || +addedAge > 100) {
        setErrors({
            title: "Oh Nooo...",
            message: "Please enter valid age"
        })
        return;
    }

        const newDatas = {
            name: addedName,
            age: addedAge,
            id : Math.floor(Math.random() * 1000)
        }

    onNewDatas(newDatas);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    onCloseForm(ev);
    }

    const closeForm = (ev) => {
        onCloseForm(ev);
    }

    const handleError = () =>{
        setErrors(null);
    }
    
    return (
        <Container>
            {errors && (
                <ErrorModal 
                    onCloseError={handleError}
                    title={errors.title}
                    message={errors.message}
                    />
            )}
            

        <Form onSubmit={submitHandler}>
            <Label htmlFor='username'>Username:</Label>
            <Input id="username" ref={nameInputRef} placeholder="username"/>
            <Label htmlFor='age'>Age:</Label>
            <Input id="age" ref={ageInputRef} placeholder="age"/>
            <ButtonContainer>
                <Button type="submit">Add User</Button>
                <Button onClick={closeForm}>Cancel</Button>
            </ButtonContainer>
        </Form>
            
           
        </Container>
    )
}

export default AddUser
