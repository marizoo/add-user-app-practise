import React, {useState} from 'react';
import styled from 'styled-components';
import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';
import { columnIt } from './globalStyle';
import Button from './UI/Button';
import Card from './UI/Card';

const Container = styled.div`
width: 100vw;
height: 100vh;
background-color: #1d1d1d;
${columnIt};
align-items: center;
`;

const DUMMY_DATA = [
  {
    id: '001',
    name: 'Erykah',
    age: '41'
  },
  {
    id: '002',
    name: 'Taylor',
    age: '28'
  },
]


const App = () => {
  const [datas, setDatas] = useState(DUMMY_DATA);
  const [showForm, setShowForm] = useState(false)

  const showDataHandler = (newDatas) => {
    setDatas( (prevDatas) => {
      return[newDatas, ...prevDatas]
    } )
  }

  const toggleForm = (ev) => {
    setShowForm(!showForm);
  }

  return (
  <Container>
    {!showForm && (
      <Button onClick={toggleForm}>Add User</Button>
    )}
    {showForm && (
      <Card>
      <AddUser onCloseForm={toggleForm} onNewDatas={showDataHandler} />
    </Card>
    )}
    
    <Card>
      <ListUsers datas={datas}/>
    </Card>
  </Container>
  )
};

export default App;