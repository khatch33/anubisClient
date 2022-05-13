import Container from '@mui/material/Container';
import styled from 'styled-components';
import Image from 'next/Image';
import { useEffect } from 'react';
import BoardImg from '../../public/gameboard.jpg';
import Card from '@mui/material/Card';

import Game from '../../pages/_sampleData/sampleGame.js';
import { MapEmAcross, MapEmCircle, oneInMiddle } from './HelperFuncs.js';
//import { useRecoilState } from 'recoil';

const sprite = { height: '60px', width: '30px' };
export default function GameBoard(props) {
  const players = props.game.players;
  const game = props.game;
  useEffect(() => {
    console.log(game, players);
  });
  // const [isShown, setIsShown] = useState(false);
  //const sprite = {height: 100, width: 30}
  //const [Middle, setArr] = useState()
  //var Arr;// = oneInMiddle(players, 60, 30, 500, 500, '627933882926bbcb74299ad1')
  //console.log(Arr)
  const renderItems = (game) => {
    var phase = game.phase || 'night';
    //console.log(game, players)
    var Arr;
    if (phase === 'day2') {
      Arr = MapEmAcross(players, 60, 30, 500, 500);
    } else if (phase === 'day3') {
      Arr = oneInMiddle(players, 60, 30, 500, 500, '627d86726902e534664e1b02');
    } else {
      Arr = MapEmCircle(players, 60, 30, 500, 500);
    }
    return Object.values(Arr).map((locale) => {
      return <Person left={locale.left} top={locale.top}></Person>;
    });
  };
  const handleClick = () => {};

  return (
    <OuterContainer maxWidth={false} disableGutters={true}>
      <Banner>
        {props.announcement ? (
          <Announcement behavior='scroll' direction='left'>
            {props.announcement}
          </Announcement>
        ) : null}
      </Banner>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <ImgContainer maxWidth={false} disableGutters={true} id='gameboard-container'>
          <Img src={BoardImg} alt='' height='500' width='500' />

          {game ? renderItems(game) : null}
          {/* {Object.values(Arr).map((locale) => {
            //console.log(locale)
            return <Person left={locale.left} top={locale.top}></Person>
          } )} */}
          {/* <Person left={'460.00px'} top={'250.00px'}></Person>

          <Person left={'23.5%'} top={'40%'}></Person>
          <Person left={'47%'} top={'40%'}></Person>
          <Person left={'70.5%'} top={'40%'}></Person>
          <Person left={'94%'} top={'40%'}></Person>
          <Person left={'94%'} top={'40%'}></Person>

          <Person left={'94%'} top={'40%'}></Person> */}
        </ImgContainer>

        <InfoContainer maxWidth={false} disableGutters={true}>
          <Header>GAME INFO</Header>
          <div>
            <StartButton onClick={() => props.setOpen(!props.open)}>INSTRUCTIONS</StartButton>
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

          {game.owner ? (
            game.owner === props.playerId ? (
              <div>
                <StartButton onClick={() => props.startGame()}>START GAME</StartButton>
              </div>
            ) : null
          ) : null}
        </InfoContainer>
      </div>
    </OuterContainer>
  );
}

const Person = styled.span`
  position: absolute;
  border: 15px solid red;

  width: ${sprite.width};
  height: ${sprite.height};

  border-radius: 15px;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
`;

const OuterContainer = styled(Container)`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  /* width: 95%; */
  max-width: 800px;
  background-color: #f1f7ed;
  border-radius: 5px;
  height: 350px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 10px;
  height: 100%;
  margin-top: 20px;
  text-align: center;
  min-width: 750px;
`;

const ImgContainer = styled(Container)`
  position: relative;
  border: 1px solid black;
  border-radius: 5px;
  width: 500px;
  height: 500px;
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
  max-width: 200px;
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
  color: #9a8249;
`;
