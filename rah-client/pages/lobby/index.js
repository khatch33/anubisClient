import { useState } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import ListItem from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ChatForm from '../../components/lobby-chatForm/ChatForm';
import LobbyDisplay from '../../components/lobby-gameDisplay/LobbyDisplay';
import LobbyChatRoom from '../../components/lobby-chatRoom/LobbyChatRoom';
export default function Lobby() {
  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '20%' }}>
        <OnlineTitle>Online</OnlineTitle>
        <LobbyDisplay />
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
        <Container maxWidth={false} id='gameDisplay-container'>
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
          <p>Game Display Remove Me</p>
          <p>Game Display Remove Me</p>
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
