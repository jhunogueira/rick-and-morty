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
    margin: 0;
    padding: 0;
    
`;

const ListItem = styled.li`
    display: flex;
    width: 300px;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;

`;

const Button = styled.button`
    background: #d5273e;
    color: white;
    font-weight: bold;
    width: 36px;
    border-radius: 4px;
    padding: 8px;
    border: none;

`;

    const WatchedEpisodesList = ({ list, onRemove }) => {

        return (
            <ListContainer>
                <Title>Episódios assistidos</Title>
                <List>
                    {list.map((item) =>(
                       <ListItem>
                           <p> 
                            {item.name}
                           </p>
                           <Button onClick={() => onRemove(item)}>x</Button>
                           </ListItem>
                        ))}
                    
                </List>
            </ListContainer>
        );
    }

    export default WatchedEpisodesList;