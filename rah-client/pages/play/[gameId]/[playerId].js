import Container from '@mui/material/Container';
import React, {useState, useEffect} from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Navbar from '../../../components/Navbar/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import styled from 'styled-components';
import axios from 'axios'
import PlayChat from '../../../components/play-chatForm/PlayChat';
import PlayerCard from '../../../components/playerCard.js';
import {sampleGame} from '../../../pages/_sampleData/sampleGame.js'
const basePath = 'http://localhost:4030/blueocean/api/v1';

export default function Game() {
  const [players, setPlayers] =  useState([])
  const [owner, setOwner] = useState()
  const [role, setRole] = useState('wolf')
  const [phase, setPhase] = useState('night')
  const [card, setCard] = useState(0)
  //websocket connection to game, url will be gameID
  const moveRight = () => {
    let current = card
    setCard(current + 5)
  }
  const moveLeft = () => {
    if (Card > 5) {
      let current = card
      setCard(current - 5)
    } else {
      let current = card
      setCard(0)
    }

  }
  useEffect(() => {
    axios.get(`${basePath}/users`)
      .then((res) => {
        setPlayers(res.data.users.slice(0, 10))
        setOwner(players[0])
        sampleGame.players = players
      })
  },[])

  useEffect(() => {
    const container = document.querySelector('.playerCardContainer')
    container.style.transitionDuration =  '.8s'
    container.style.transform = `translate( -${card * 150}px)`
  }, [card])




  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '25%' }}>
        <StyledPlayChat>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
        </StyledPlayChat>
        <PlayChat />
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '75%' }}>
        <Container maxWidth={false} id='gameBoard-container'>
          {owner ? <p>{owner.userName}</p> : <p>nope</p>}
          {players ? <p>{role}</p> : <p>no players</p>}
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
        </Container>
        <Container maxWidth={false} id='playerCards-container'>
          <button onClick={moveLeft}>left</button>

          <div class="viewport">

            <div class="playerCardContainer">
              <Stack direction='row' spacing={0}>
              {players ? players.map((player) => {
              return <PlayerCard key ={player.userName} phase={phase} role={role} player={player}/>
            }) : <p>lloading</p>}
              </Stack>
            </div>
          </div>
          <button onClick={moveRight}>right</button>
        </Container>
      </Box>
    </>
  );
}

const StyledPlayChat = styled(List)`
  border: 1px solid black;
  margin-top: 1em;
  min-width: 100%;
  height: 60vh;
  overflow: auto;
  padding: 7px;
`;
