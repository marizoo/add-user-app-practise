import React from 'react'
import styled from 'styled-components';
import { centerIt, columnIt } from '../globalStyle';

const UL = styled.ul`
list-style: none;
${columnIt};
width: 80%;
padding: 20px 0;
`

const ListContainer = styled.div`
width: 80%;
display: flex;
align-items: center;
justify-content: space-between;
border: 1px solid rgba(0, 0, 0, 0.8);
width: 100%;
height: 35px;
border: 1px solid rgba(0, 0, 0, 0.8);
border-radius: 10px;
margin-bottom: 10px;
`

const LI = styled.li`
flex: 11;
font-size: 18px;
font-weight: 500;
padding-left: 10px;
display: flex;
align-items: center;

`;

const Close = styled.button`
    flex: 1;
    border: none;
    background: none;
    color: purple;
    font-size: 20px;
    font-weight: 500;
    ${centerIt};
    overflow: hidden;
    cursor: pointer;
`




const ListUser = ({datas}) => {
    return (
        
            <UL>
                {datas.map( data => (
                    <ListContainer key={data.id}>
                        <LI >{data.name} ({data.age} years old)</LI>
                        <Close>X</Close>
                    </ListContainer>
                ) )}
                
            </UL>
       
    )
}

export default ListUser
