import Container from '@mui/material/Container';
import styled from 'styled-components';


export default function GameInfo(props) {
  return (
    <>
    <InfoContainer maxWidth={false} disableGutters={true}>
      <Header>GAME INFO</Header>
      <div>
        <StartButton onClick={() => props.setOpen(!props.open)}>
          INSTRUCTIONS
        </StartButton>
      </div>

      <TextDiv>
         {props.game.phase === 'pregame' ? <><span>PHASE: </span><span>PRE-GAME</span></> : <><span>PHASE: </span> <span>{props.game.phase}</span></> }
      </TextDiv>
      {props.info ? (
        <InfoDiv>
          <TextDiv><span>YOUR ROLE:</span> <span>{props.info.role}</span></TextDiv>
          <TextDiv><span>VILLAGERS:</span> <span>{props.info.playersLeft}</span></TextDiv>
          <TextDiv><span>ANUBIS:</span> <span>{props.info.wolfsLeft}</span></TextDiv>
          <TextDiv><span>DOCTORS:</span> <span>{props.info.doctorsLeft}</span></TextDiv>
          <TextDiv> <span>SEERS:</span> <span>{props.info.seersLeft}</span> </TextDiv>
        </InfoDiv>
      ) : null}

      {props.game.owner ? (
        props.game.owner === props.playerId ? (
          <div style={{position: 'absolute', left: '35px', bottom: '0'}}>
            {(props.game.phase !== 'pregame') ? <StartButton onClick={() => props.startGame()}>
              START GAME
            </StartButton> : null}
          </div>
        ) : <div>The game will start shortly</div>
      ) : null}
    </InfoContainer>
    </>
  );
}

const InfoContainer = styled(Container)`
  width: 250px;
  height: 250px;
  border-radius: 5px;
  border: 1px solid gray;
  font-size: 0.9em;
  background-color: #F1F7ED;
  text-align: center;
  position: relative;
  top: -20px;
  font-family: 'Josefin Slab';
  font-weight: 700;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

const Header = styled(Container)`
  background-color: #9a8249;
  border-radius: 5px 5px 0 0;
  height: 35px;
  font-family: 'Josefin Slab';
  font-weight: 700;
  font-size: 1.1em;
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
  width: fit-content;
  height: 30px;
  text-align: center;
  margin: 3px;
  margin-bottom: 8px;
  font-family: 'Josefin Slab';
  font-weight: 700;
  font-size: 1.1em;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-right: 8px;
`;