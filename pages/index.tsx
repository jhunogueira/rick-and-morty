import React, { useState, useEffect } from 'react';
import styled from "styled-components";
import Title from '../src/components/Title'
import AllEpisodesList from '../src/components/AllEpisodesList'
import WatchedEpisodesList from '../src/components/WatchedEpisodesList'

const API_URL = "https://rickandmortyapi.com/api/episode";

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  min-width: 100%;
  background-color: #2F4368;

  `;

  const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    `;

  const ListsContainer = styled.div`
    display: flex;

    div{
      flex-basis: 50%;
    }
  `;

const Page = () => {
  const [episodes, setEpisodes] = useState([]);
  const [watchedEpisodes, setWatchedEpisodes] = useState([]);

  useEffect(() => {

    const fetchEpisodes = () => {

    fetch(API_URL)
      .then((response) => response.json())
      .then((value) => setEpisodes(value.results));
    };

    fetchEpisodes();

    }, []);
  

    const addEpisode = episode => {
      const newEpisodes = [...watchedEpisodes, episode];
      setWatchedEpisodes(newEpisodes);
    };

    const removeEpisode = (episode) => {
      const newEpisodes = watchedEpisodes.filter(item => item.id !== episode.id);
      setWatchedEpisodes(newEpisodes);
    };

    return (

    <Container>
      <TitleContainer>
        <Title/>
      </TitleContainer>

      <ListsContainer>
        <AllEpisodesList list={episodes} onAddEpisode={addEpisode}/>
        <WatchedEpisodesList list={watchedEpisodes} onRemove={removeEpisode}/>
      </ListsContainer>
    </Container>

    );

};

export default Page