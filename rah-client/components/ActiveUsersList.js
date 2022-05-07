import Container from '@mui/material/Container';

export default function ActiveUsersList(props) {

  return (
    <Container maxWidth={false} id="activeUsers-container">

      <Container id="activePlayers-container">
        <h3>Online Players</h3>
        {props.users.map((user) => (
          <Container maxWidth={false} className="activeUser-item">
            <div>{user.name}</div>
            <div>{user.rank}</div>
          </Container>
        ))}
      </Container>

    </Container>
  )
}