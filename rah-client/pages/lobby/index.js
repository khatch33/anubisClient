import { useState } from 'react';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
export default function Lobby() {
  const [chatBoxInput, setChatBoxInput] = useState('');

  const chatBoxOnChange = (e) => {
    setChatBoxInput(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(chatBoxInput);
    setChatBoxInput('');
  };

  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '20%' }}>
        <p style={{ textAlign: 'center' }}>Online</p>
        <List
          style={{
            border: '1px solid black',
            marginTop: '1em',
            minWidth: '100%',
            height: '90vh',
            overflow: 'auto',
            padding: '7px',
          }}>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
          <p>Some player</p>
        </List>
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
        <Container
          style={{ marginTop: '3.5em', overflow: 'auto' }}
          maxWidth={false}
          id='gameDisplay-container'>
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
        <Container
          style={{ marginTop: '1em', marginBottom: '1em' }}
          maxWidth={false}
          id='lobbyChat-container'>
          <p>Chat box</p>
          <List
            style={{
              border: '1px solid black',
              marginTop: '1em',
              minWidth: '100%',
              minHeight: '60%',
              overflow: 'auto',
              padding: '7px',
            }}>
            INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE
            HERE IS THE CHAT... INSIDE HERE IS THE CHAT... INSIDE HERE IS THE CHAT...
          </List>
          <Form onSubmit={onFormSubmit}>
            <input
              style={{
                marginTop: '1em',
                height: '35px',
                borderRadius: '7px',
                width: '100%',
              }}
              type='text'
              placeholder='type to players'
              onChange={chatBoxOnChange}
              value={chatBoxInput}
            />
            <input hidden type='submit' />
          </Form>
        </Container>
      </Box>
    </>
  );
}

const Form = styled.form`
  margin-top: 1em;
`;
