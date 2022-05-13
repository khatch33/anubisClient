import Container from '@mui/material/Container';
import styled from 'styled-components';


export default function GameInfo(props) {
  return (
    <InfoContainer maxWidth={false} disableGutters={true}>
      <Header>GAME INFO</Header>
      <div>
        <StartButton onClick={() => props.setOpen(!props.open)}>
          INSTRUCTIONS
        </StartButton>
      </div>

      <div>Phase: {props.game.phase}</div>

      {props.info ? (
        <div>
          <div>Your Role: {props.info.role}</div>
          <div>Players Remaining: {props.info.playersLeft}</div>
          <div>Anubis Remaining: {props.info.wolfsLeft}</div>
          <div>Doctors Remaining: {props.info.doctorsLeft}</div>
          <div>Seers Remaining: {props.info.seersLeft}</div>
        </div>
      ) : null}

      {props.game.owner ? (
        props.game.owner === props.playerId ? (
          <div>
            <StartButton onClick={() => props.startGame()}>
              START GAME
            </StartButton>
          </div>
        ) : null
      ) : null}
    </InfoContainer>
  );
}

const InfoContainer = styled(Container)`
  width: 250px;
  height: 300px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-left: 15px;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  max-width: 200px;
  background-color: #F1F7ED;
`;

const Header = styled(Container)`
  background-color: #9a8249;
  border-radius: 5px 5px 0 0;
  height: 35px;
  font-family: 'Roboto';
  text-align: center;
  color: #f1f7ed;
  font-weight: 700;
  letter-spacing: 0.2rem;
  line-height: 1.6;
  padding-top: 2px;
  font-size: 1.25rem;
  position: relative;
  top: -5px;
  width: 100%;
`;

const StartButton = styled.button`
  background-color: #9a824991;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  padding: 5px;
  width: 110px;
  height: 35px;
  text-align: center;
  margin: 3px;
`;