import React, {useState} from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';
import Button from '../UI/Button';
import Card from '../UI/Card';
import { ErrorModal } from '../UI/ErrorModal';

const Form = styled.form`
width: 80%;
padding: 20px 0;
${columnIt};
`;

const Label = styled.label`
font-size: 18px;
font-weight: 500px;
margin-bottom: 5px;
`;

const Input = styled.input`
font-size: 18px;
font-weight: 300px;
display: flex;
align-items: center;
padding-left: 10px;
margin-bottom: 15px;
`

const ButtonContainer = styled.div`
display: flex;
width: 100%;
${centerIt};
`



const AddUser = ({onNewDatas, onCloseForm, title, message, onCloseOverlay}) => {

    const [addName, setAddName] = useState("")
    const [addAge, setAddAge] = useState("")
    const [errors, setErrors] = useState()

    const addNameHandler = (ev) => {
        setAddName(ev.target.value)
    }

    const addAgeHandler = (ev) => {
        setAddAge(ev.target.value)
    }

   
   

    const submitHandler = (ev) => {
        ev.preventDefault()

        if(addName.trim().length === 0 || addAge.trim().length === 0) {
            setErrors({
                title: 'oh NO babe..',
                message: 'please enter valid username.'
            })
            return;
        }
    
        if(+addAge < 1 || +addAge > 100){
            setErrors({
                title: 'oh No again..',
                message: 'please enter valid number (from 1 - 100).'
            })
            return;
        }

        const newDatas = {
            name: addName,
            age: addAge,
            id: Math.floor(Math.random() * 1000)
        }

        onNewDatas(newDatas);
        setAddName("");
        setAddAge("");
        onCloseForm(ev);
    }

    const closeForm = (ev) =>{
        onCloseForm(ev)
    }

    const closeOverlay = () => {
        setErrors(null)
    }

    return (
        <Card>
            {errors && (
                <ErrorModal onCloseOverlay={closeOverlay} title={errors.title} message={errors.message}/>
            )}
            <Form onSubmit={submitHandler}>
                <Label htmlFor='username'>Username:</Label>
                <Input id='username' placeholder='username' type='text' onChange={addNameHandler} value={addName}/>
                <Label htmlFor='age'>Age:</Label>
                <Input id='age' placeholder='age' type='number' onChange={addAgeHandler} value={addAge}/>
                <ButtonContainer>
                    <Button type="submit">Add User</Button>
                    <Button onClick={closeForm}>Cancel</Button>
                </ButtonContainer>   
            </Form>
        </Card>
    )
}

export default AddUser
