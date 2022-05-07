import Container from '@mui/material/Container';
import styled from 'styled-components';
import Navbar from '../../components/Navbar/Navbar';

export default function Lobby() {
  return (
    <>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Navbar />
      </div>
      <Container maxWidth={false} id='lobbyRoom-container'>
        <Container maxWidth={false} id='gameDisplay-container'>
          <h1>Game Display</h1>
        </Container>

        <Container maxWidth={false} id='lobbyChat-container'>
          <h1>Chat</h1>
        </Container>
      </Container>
    </>
  );
}
