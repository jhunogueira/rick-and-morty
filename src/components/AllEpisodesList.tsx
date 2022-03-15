import React from 'react';

import styled from "styled-components";

const ListContainer = styled.div`
    background: white;
    padding: 16px;
    margin: 16px;
    border-radius: 8px;
    
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 24px;
    text-align: center;

`;

const List = styled.ul`
    list-style: none;
    overflow: auto;
    margin: 0;
    padding: 0;
    max-height: 600px;
`;

const ListItem = styled.li`
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;

`;

const Button = styled.button`
    background: #97ce4c;
    color: white;
    font-weight: bold;
    width: 100px;
    border-radius: 4px;
    padding: 8px;
    border: none;

`;

    const AllEpisodesList = ({ list, onAddEpisode }) => {

        return (
            <ListContainer>
                <Title>Todos os episódios</Title>
                <List>
                    {list.map( item => (
                    <ListItem key={item.name}>
                        <p>{item.name}</p>
                        <Button onClick={() => onAddEpisode(item)}> Já assisti</Button>
                        
                    </ListItem>
                    ))}
                    
                </List>
            </ListContainer>
        );
    }

    export default AllEpisodesList;