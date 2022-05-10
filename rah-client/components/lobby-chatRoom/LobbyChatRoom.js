import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import styled from 'styled-components';
import { socket } from '../../socket/socket';

export default function LobbyChatRoom() {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    socket.on('connect', () => {
      socket.emit('join-lobby', { username: 'josh' });
    });
    socket.on('joined-lobby', (user) => {
      console.log(user);
    });
  });

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
