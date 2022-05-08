import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Navbar from '../../components/Navbar/Navbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
export default function Game() {
  return (
    <>
      <Navbar />
      <Container sx={{ float: 'left', width: '20%' }}>
        <p style={{ textAlign: 'center' }}>Chat</p>
        <List
          style={{
            border: '1px solid black',
            marginTop: '1em',
            minWidth: '100%',
            height: '93.25vh',
            overflow: 'auto',
            padding: '7px',
          }}>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
          <p>I'm some random message</p>
        </List>
      </Container>
      <Box sx={{ display: 'inline-block', float: 'right', width: '80%' }}>
        <Container style={{ marginTop: '3.5em' }} maxWidth={false} id='gameBoard-container'>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
          <p>Game Board Remove me</p>
        </Container>
        <Container
          maxWidth={false}
          style={{ marginTop: '1em', marginBottom: '1em' }}
          id='playerCards-container'>
          <Stack direction='row' spacing={2}>
            <Card className='playerCard'>player 1</Card>
            <Card className='playerCard'>player 1</Card>
            <Card className='playerCard'>player 1</Card>
            <Card className='playerCard'>player 1</Card>
            <Card className='playerCard'>player 1</Card>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
