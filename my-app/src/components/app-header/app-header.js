import React from 'react';
import './app-header.css';
import styled from 'styled-components';

const Header = styled.div`
    display: flex;    
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    let zagolovok = allPosts;
    switch (allPosts) {
        case 1: 
            zagolovok += " запись";
            break;
        case 2:  
        case 3:  
        case 4:  
            zagolovok += " записи";
            break;  
        default:  
            zagolovok += " записей";
    }
    return (
        <Header>
            <h1>Nikita Kurilin</h1>
            <h2>{allPosts === 0 ? "Записей нет" : `${zagolovok}, из них понравилось ${liked}`}</h2>
        </Header>
    )
}

export default AppHeader;