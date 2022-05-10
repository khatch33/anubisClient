import React, { useState, useEffect, useContext } from 'react';
import List from '@mui/material/List';
import styled from 'styled-components';
import { SocketContext } from '../../socket/socket';
export default function LobbyChatRoom() {
  const [chats, setChats] = useState([]);

  const socket = useContext(SocketContext);

  //put where online players are.
  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join-lobby', { username: 'josh' });
    });
    socket.on('joined-lobby', (user) => {
      console.log('user', user);
    });
  });

  //building up message to display
  // useEffect(() => {
  //   socket.on('receive-message', (user, msg) => {
  //     const copyChat = [...chats]
  //     copyChat.push({user, msg})
  //     setChats(copyChat)
  //   })
  // })

  return (
    <StyledChatBox>
      INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE
      IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT...
    </StyledChatBox>
  );
}

const StyledChatBox = styled(List)`
  border: 1px solid black;
  margin-top: 1em;
  min-width: 100%;
  min-height: 60%;
  overflow: auto;
  padding: 7px;
`;
