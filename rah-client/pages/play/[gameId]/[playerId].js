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
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import styled from 'styled-components';
import axios from 'axios'
import {getGameInfo} from './funcs.js'
import { useRouter } from 'next/router'
import GameInfo from '../../../components/GameInfo.js'
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
  const [open, setOpen] = useState(false)
  const [game, setGame] = useState(sampleGame)

  const router = useRouter()
  const {gameId, playerId} = router.query
  const closeDrawer = () => {
    setOpen(false)
  }
  const switchPhase = () => {
    phase === 'night' ? setPhase('day') : setPhase('night')
  }
  const moveRight = () => {
    if (card < game.players.length - 5) {
      let current = card
      setCard(current + 5)
    } else {
      let current = card
      setCard(players.length - 5)
    }

  }
  const gameInfo = getGameInfo(game, playerId)
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
    //websocket connection to game, url will be gameID
    // axios.get(`${basePath}/users`)
    //   .then((res) => {
    //     setPlayers(res.data.users.slice(0, 10))
    //     setOwner(players[0])
    //     sampleGame.players = players
    //     setGame(sampleGame)
    //   })
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
          <button onClick={() => setOpen(!open)}>Game Info</button>
        <Drawer
          open={open}
          className='gameInfoDrawer'
          variant="persistent"
          anchor="top"
        >
          <div><GameInfo close={closeDrawer} info={gameInfo} game={game}/></div>
        </Drawer>
          <h3>game owner: {game.owner.userName}</h3>
          <h3>your role: {gameInfo.role}</h3>
          <h3>{phase}</h3>
          <button onClick={switchPhase}>switch phase</button>

        </Container>
        <Container maxWidth={false} id='playerCards-container'>
          <button onClick={moveLeft}>left</button>

          <div className="viewport">

            <div className="playerCardContainer">
              <Stack direction='row' spacing={0}>
              {game.players ? game.players.map((player) => {
                if (player.player._id !== playerId) {
                  return <PlayerCard key ={player.player.userName} phase={phase} role={gameInfo.role} player={player}/>
                }

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
