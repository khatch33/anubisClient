import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/Navbar/Navbar';

export default function Game() {
  return (
    <>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <Navbar />
      </div>
      <Container maxWidth={false} id='gameRoom-container'>
        <Container id='gameChat-container'>
          <h1>Chat</h1>
        </Container>

        <Container id='gameRoom-inner-container'>
          <Container id='gameBoard-container'>
            <h1>Game Board</h1>
          </Container>

          <Container id='playerCards-container'>
            <Stack direction='row' spacing={2}>
              <Card className='playerCard'>player 1</Card>
              <Card className='playerCard'>player 1</Card>
              <Card className='playerCard'>player 1</Card>
              <Card className='playerCard'>player 1</Card>
              <Card className='playerCard'>player 1</Card>
            </Stack>
          </Container>
        </Container>
      </Container>
    </>
  );
}
