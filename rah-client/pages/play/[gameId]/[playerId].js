import Container from '@mui/material/Container';
import React, { useState, useEffect, useContext } from 'react';
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
import axios from 'axios';
import { SocketContext } from '../../../socket/socket';
import { getGameInfo } from './funcs.js';
import { useRouter } from 'next/router';
import Alert from '@mui/material/Alert';
import GameInfo from '../../../components/GameInfo.js';
import PlayChat from '../../../components/GameRoom/PlayChatForm';
import PlayChatRoom from '../../../components/GameRoom/PlayChatRoom';
import PlayerCard from '../../../components/PlayerCard.js';
import { sampleGame } from '../../../pages/_sampleData/sampleGame.js';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';
import GameBoard from '../../../components/GameRoom/GameBoard';
const basePath = 'http://localhost:4030/blueocean/api/v1';

export default function Game() {
  const [players, setPlayers] = useState([]);
  const [owner, setOwner] = useState();
  const [announcement, setAnnouncement] = useState('somegr greauig yu ireuygr iuo');
  const [role, setRole] = useState('wolf');
  const [phase, setPhase] = useState('night');
  const [card, setCard] = useState(0);
  const [open, setOpen] = useState(false);
  const [game, setGame] = useState();
  const [gameInfo, setGameInfo] = useState();
  const [messages, setMessages] = useState([]);
  const socket = useContext(SocketContext);
  const router = useRouter();
  const { gameId, playerId } = router.query;
  var started = false;
  //const TestGame = TestGame.sampleGame
  const closeDrawer = () => {
    setOpen(false);
  };
  const startGame = () => {
    socket.emit('start-test', playerId, gameId, 10000);
  };
  const switchPhase = () => {
    phase === 'night' ? setPhase('day') : setPhase('night');
  };
  const moveRight = () => {
    if (card < game.players.length - 5) {
      let current = card;
      setCard(current + 5);
    } else {
      let current = card;
      setCard(players.length - 5);
    }
  };
  const moveLeft = () => {
    if (Card > 5) {
      let current = card;
      setCard(current - 5);
    } else {
      let current = card;
      setCard(0);
    }
  };
  socket.on(`receive-message-${gameId}`, (user, message) => {
    let messageObj = { userName: user.userName, text: message, user_id: user.user_id };
    if (user.user_id === 'announcement') {
      setAnnouncement(message);
    } else {
      setMessages([...messages, messageObj]);
    }
  });
  useEffect(() => {
    if (started === false) {
      socket.emit('join-room', playerId, gameId);
      // socket.emit("start-test", playerId, gameId, 5000);
      started = true;
    }
  }, []);

  useEffect(() => {
    if (game) {
      const container = document.querySelector('.playerCardContainer');
      container.style.transitionDuration = '.8s';
      container.style.transform = `translate( -${card * 150}px)`;
    }
  }, [card]);
  socket.on(`game-send`, (game) => {
    setGame(game);
    console.log(game);
    setGameInfo(getGameInfo(game, playerId));
  });

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:4030/blueocean/api/v1/games/single',
      params: { id: gameId },
    }).then((res) => {
      let data = res.data;
      console.log(data);
      setGame(data.game);
      //setGameInfo(getGameInfo(game, playerId));
    });

    //return () => {
    // socket.on(`game-send-${gameId}`, (game) => {
    //   setGame(game);
    //   //setGameInfo(getGameInfo(game, playerId));
    // });
    //};
  }, []);

  return (
    <>
      <Navbar />
      <Container sx={{ minWidth: '1100px', maxWidth: '1500px' }}>
        <Container sx={{ float: 'left', width: '25%' }}>
          <PlayChatRoom messages={messages} />
          <PlayChat />
        </Container>
        {game ? (
          <Box sx={{ display: 'inline-block', float: 'right', width: '75%' }}>
            <Container maxWidth={false} id='gameBoard-container'>
              <Drawer open={open} className='gameInfoDrawer' variant='persistent' anchor='top'>
                <div>
                  <GameInfo close={closeDrawer} info={gameInfo} game={game} />
                </div>
              </Drawer>

              <GameBoard
                announcement={announcement}
                info={gameInfo}
                setOpen={setOpen}
                open={open}
                startGame={startGame}
                playerId={playerId}
                game={game}
              />
            </Container>
            <Container maxWidth={false} id='playerCards-container'>
              <StyledButton onClick={moveLeft}>
                <ChevronLeftIcon stroke='#F1F7ED' fill='#F1F7ED' height='30' />
              </StyledButton>

              <div className='viewport'>
                <div disableGutters={true} maxWidth={false} className='playerCardContainer'>
                  <Stack direction='row' spacing={0}>
                    {game.players ? (
                      game.players.map((player) => {
                        if (player.player.user_id !== playerId) {
                          return (
                            <PlayerCard
                              key={player.player.userName}
                              phase={gameInfo.phase}
                              role={gameInfo.role}
                              player={player}
                            />
                          );
                        }
                      })
                    ) : (
                      <p>Loading</p>
                    )}
                  </Stack>
                </div>
              </div>
              <StyledButton onClick={moveRight}>
                <ChevronRightIcon stroke='#F1F7ED' fill='#F1F7ED' height='30' />
              </StyledButton>
            </Container>
          </Box>
        ) : (
          <h2>Error: No games found. Try again.</h2>
        )}
      </Container>
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

const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  height: 20px;
  width: 20px;
  margin-left: 10px;
`;

const StyledAlert = styled(Alert)`
  width: fit-content;
  background-color: #9a8249;
  color: #f1f7ed;
  display: inline;
`;
