import React, { useState, useEffect, useContext } from 'react';
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
import { sampleGame } from '../_sampleData/sampleGame.js';
import axios from 'axios';
import LobbyChatRoom from '../../components/lobby-chatRoom/LobbyChatRoom';
import { activeUsers } from '../_sampleData/activeUsers.js';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CreateGame from '../../components/lobby-createGame/CreateGame';
import ActiveUsersList from '../../components/ActiveUsersList';
import { userState } from '../../_states/tokenState';
import { useRecoilState } from 'recoil';
import { SocketContext } from '../../socket/socket';
export default function Lobby() {
  const [value, setValue] = useState(0);
  const [user, setUser] = useRecoilState(userState);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };
  const socket = useContext(SocketContext);

  const [games, setGames] = useState([sampleGame]);

  // useEffect(() => {
  //    return () => {
  //      socket.emit('join-room', user, 'lobby')
  //    }

  // }, [socket]);
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <Container maxWidth={false} disableGutters={true}>
      <Navbar />

      <Container maxWidth={false} disableGutters={true} style={{ display: 'flex', margin: '2%' }}>
        <ActiveUsersList />

        <TabsContainer value={value} onChange={handleChange} aria-label='basic tabs example'>
          <Tab label='Lobby' />
          <Tab label='Create' />
        </TabsContainer>

        <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
          <Container maxWidth={false} id='gameDisplay-container'>
            {value === 0 && games ? (
              arr.map((num, ind) => {
                var playerView = games[0].players[ind].player;
                return <GameRow key={ind} player={num} game={games[0]} />;
              })
            ) : (
              <CreateGame />
            )}
          </Container>

          <Container maxWidth={false} id='lobbyChat-container'>
            <LobbyChatRoom />
            <ChatForm />
          </Container>
        </Box>
      </Container>
    </Container>
  );
}

const OnlineTitle = styled.p`
  text-align: center;
`;

const TabsContainer = styled(Tabs)`
  position: absolute;
  margin-left: 22.1%;
  margin-top: 10px;
`;
