import { useState, useEffect, useContext } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ChatForm from '../../components/lobby-chatForm/ChatForm';
import GameRow from '../../components/GameRow.js';
import LobbyDisplay from '../../components/lobby-gameDisplay/LobbyDisplay';
import LobbyChatRoom from '../../components/lobby-chatRoom/LobbyChatRoom';
import { activeUsers } from '../_sampleData/activeUsers.js';
//import SocketContext from '../../socket/socket.js';
import { socket } from '../../socket/socket.js';
export default function Lobby() {
  //const socket = useContext(SocketContext)
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('gg', 'sting');
    });
  });
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const game = {
    owner: 'creator',
    gameName: 'somKindaGameName',
    playerAllowed: 20,
    players: activeUsers,
    winner: 'none',
    started: false,
    createdAt: 'creationTimeString',
  };
  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '20%' }}>
        <OnlineTitle>Online</OnlineTitle>
        <LobbyDisplay />
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
        <Container maxWidth={false} id='gameDisplay-container'>
          {arr.map((num) => {
            return <GameRow game={game} />;
          })}
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
          <LobbyChatRoom />
          <ChatForm />
        </Container>
      </Box>
    </>
  );
}

const OnlineTitle = styled.p`
  text-align: center;
`;
