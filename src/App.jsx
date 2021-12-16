import React, {useState} from 'react'
import styled from 'styled-components';
import AddUser from './components/AddUser';
import ListUser from './components/ListUser';
import { columnIt } from './globalStyle';
import Button from './UI/Button';
import Card from './UI/Card';

const MainContainer = styled.div`
height: 100vh;
width: 100vw;
background-color: #1d1d1d;
${columnIt};
justify-content: center;
align-items: center;
overflow: hidden;
`;

const DUMMY_DATA = [
  {
    name: 'Mikaela',
    age: '37',
    id: '001'
  },
  {
    name: 'Danielle',
    age: '35',
    id: '002'
  },
] 

const App = () => {
  const [showData, setShowData] = useState(DUMMY_DATA);
  const [showForm, setShowForm] = useState(false);

  const listNewData = (newDatas) => {
    setShowData( (prevData) => {
      return[newDatas, ...prevData];
    })
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  
  return (
    <MainContainer>
      <Card>
        {!showForm && (
          <Button onClick={toggleForm}>Add User</Button>
        )}
        {showForm && <AddUser onNewDatas={listNewData} onCloseForm={toggleForm}/>}
        
      </Card>
      <Card>
        <ListUser datas={showData} />
      </Card>
    </MainContainer>
  )
}

export default App
