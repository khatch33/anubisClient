
import Container from '@mui/material/Container';
import styled from 'styled-components';
import Image from 'next/Image';
import BoardImg from '../../public/gameboard.jpg';
import Card from '@mui/material/Card';

export default function GameBoard(props) {


  return (
    <OuterContainer maxWidth={false} disableGutters={true}>

      <Banner>
        {props.announcement ? (
          <Announcement behavior="scroll" direction="left">{props.announcement}</Announcement>
        ) : null}
      </Banner>

      <div style={{display: 'flex', flexDirection: 'row'}}>

      <ImgContainer maxWidth={false} disableGutters={true} id="gameboard-container">
        <Img src={BoardImg} alt="" height="370" width="500"/>
      </ImgContainer>

      <InfoContainer maxWidth={false} disableGutters={true}>
        <Header>GAME INFO</Header>
        <div><StartButton onClick={() => props.setOpen(!props.open)}>INSTRUCTIONS</StartButton></div>

        <div>Game Owner: {props.game.owner}</div>
        <div>Phase: {props.game.phase}</div>
        <div><b>Your Role:</b> {props.info.role}</div>
        <div><b>Players Remaining:</b> {props.info.playersLeft}</div>
        <div><b>Anubis Remaining:</b> {props.info.wolfsLeft}</div>
        <div><b>Doctors Remaining:</b> {props.info.doctorsLeft}</div>
        <div><b>Seers Remaining:</b> {props.info.seersLeft}</div>

        {props.game ? (
          props.game.owner === props.playerId ? (
            <div><StartButton onClick={() => props.startGame()}>START GAME</StartButton></div>
          ) : null
        ) : null}

      </InfoContainer>
      </div>


    </OuterContainer>
  )
}

const OuterContainer = styled(Container)`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  width: 95%;
  background-color: #F1F7ED;
  border-radius: 5px;
  height: 350px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 10px;
  height: 100%;
  margin-top: 20px;
  text-align: center;
`;

const ImgContainer = styled(Container)`
  border-radius: 5px;
  width: 500px;
  height: 100%;
  margin-left: 0;
`;

const InfoContainer = styled(Container)`
  width: 250px;
  height: 350px;
  border-radius: 5px;
  border: 1px solid gray;
  margin-left: 15px;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Header = styled(Container)`
  background-color: #9A8249;
  height: 35px;
  font-family: 'Roboto';
  text-align: center;
  color: #F1F7ED;
  font-weight: 700;
  letter-spacing: 0.3rem;
  line-height: 1.6;
  padding-top: 2px;
  font-size: 1.25rem;
  position: relative;
  top: -5px;
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

const Banner = styled.div`
  width: 100%;
  height: 50px;
`;

const Img = styled(Image)`
  border-radius: 5px;
`;

const Announcement = styled.marquee`
  font-size: 1.2em;
  line-height: 1.6em;
  font-family: monospace;
  font-weight: 700;
  color: #9A8249;
`;