import { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ChatForm from '../../components/lobby-chatForm/ChatForm';
import GameRow from '../../components/GameRow.js'
import LobbyDisplay from '../../components/lobby-gameDisplay/LobbyDisplay';
import {activeUsers} from '../_sampleData/activeUsers.js'
import {sampleGame} from '../_sampleData/sampleGame.js'
import axios from 'axios'
//import SocketContext from '../../socket/socket.js';
import {socket} from '../../socket/socket.js'
export default function Lobby() {
  //const socket = useContext(SocketContext)
  const [games, setGames] = useState([sampleGame])
  useEffect(() => {
    // socket.on('connect', (() => {
    //   socket.emit('gg', 'sting')
    // }))
    console.log(sampleGame)
    // axios.get('http://localhost:4030/blueocean/api/v1/users')
    // .then((res) => {
    //   const players = res.data.users.slice(0, 10)
    //   const gameList = players.map((player, ind) => {
    //     let createdGame = createSampleGame(player, players)
    //     return createdGame
    //   })
    //   setGames(gameList)
    // })

  }, [])
  const arr = [1,2,3,4,5,6,7,8,9,10]
  // const createSampleGame = (owner, players) => {
  //   var gameObj = {
  //     id: 'game-' + owner.userName,
  //     owner: players[0],
  //     gameName: "somKindaGameName",
  //     playerAllowed: 20,
  //     players: [],
  //     winner: 'none',
  //     started: false,
  //     createdAt: 'creationTimeString'
  //   }
  //   players.forEach((player, ind) => {
  //     var role = (ind === 0 || ind === 1) ? 'wolf' : (ind === 3) ? 'doctor' : ind === 4 ? 'seer' : 'villager';
  //     gameObj.players.push({
  //       player: players[ind],
  //       status: true,
  //       role: role
  //     })
  //   })
  //   return gameObj
  // }

  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '20%' }}>
        <OnlineTitle>Online</OnlineTitle>
        <LobbyDisplay />
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
        <Container maxWidth={false} id='gameDisplay-container'>
            {games ? arr.map((num, ind) => {
              var playerView = games[0].players[ind].player
              return (
                <GameRow key={ind} player={playerView} game={games[0]}/>
              )
            }) : null}
          {/* <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p> */}
        </Container>
        <Container maxWidth={false} id='lobbyChat-container'>
          <p>Chat box</p>
          <StyledChatBox>
            INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE
            HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT...
          </StyledChatBox>
          <ChatForm />
        </Container>
      </Box>
    </>
  );
}

const OnlineTitle = styled.p`
  text-align: center;
`;

const StyledChatBox = styled(List)`
  border: 1px solid black;
  margin-top: 1em;
  min-width: 100%;
  min-height: 60%;
  overflow: auto;
  padding: 7px;
`;
