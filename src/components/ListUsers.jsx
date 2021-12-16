import React from 'react'
import styled from 'styled-components';
import { columnIt } from '../globalStyle';

const UL = styled.ul`
width: 100%;
list-style: none;
${columnIt};
align-items: center;
`;

const LI = styled.li`
border: 1px solid rgba(0, 0, 0, 0.7);
margin: 10px 0;
padding-left: 10px;
font-size: 16px;
font-weight: 500;
border-radius: 10px;
width: 90%;
height: 35px;
color: black;
display:flex;
align-items: center;
`;


const ListUsers = ({datas}) => {
    return (
        <UL>
            {datas.map( data => (
                <LI key={data.id}>{data.name} ({data.age} years old)</LI>
            ) )}
         
        </UL>
    )
}


export default ListUsers
