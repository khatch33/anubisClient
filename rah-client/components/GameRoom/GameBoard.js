import Container from '@mui/material/Container';
import styled from 'styled-components';
import Image from 'next/Image';
import { useEffect, useState } from 'react';
import BoardImg from '../../public/gameboard.jpg';
import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import Sprite1 from '../../public/sprite1.png';
import Sprite2 from '../../public/sprite2.png';
import Sprite3 from '../../public/sprite3.png';
import Sprite4 from '../../public/sprite4.png';
import Game from '../../pages/_sampleData/sampleGame.js';
import { MapEmAcross, MapEmCircle, oneInMiddle } from './HelperFuncs.js';

const sprites = [Sprite1.src, Sprite2.src, Sprite3.src, Sprite4.src];
const sprite = { height: '60px', width: '30px' };
export default function GameBoard(props) {
  const [height, setHeight] = useState();
  const [width, setWidth] = useState();
  const players = props.game.players;
  const game = props.game;

  useEffect(() => {
    setHeight(document.getElementById('bgimg').clientHeight);
    setWidth(document.getElementById('bgimg').clientWidth);
  });
  const renderItems = (game) => {
    var phase = game.phase || 'night';
    var Arr;
    if (phase === 'day2') {
      Arr = MapEmAcross(players, 70, 40, height, width);
    } else if (phase === 'day3') {
      let userName = game.playerVoted;
      Arr = oneInMiddle(players, 70, 40, height, width, userName);
    } else {
      Arr = MapEmCircle(players, 70, 40, height, width);
    }
    console.log(Arr);
    return Object.values(Arr).map((locale, i) => {
      return (
        <Tooltip title={players[i].player.userName}>
          <Person left={locale.left} top={locale.top}>
            <Image src={sprites[i % 4]} alt='' height='70' width='40' />
          </Person>
        </Tooltip>
      );
    });
  };

  return (
    <OuterContainer maxWidth={false} disableGutters={true}>
      <Banner>
        {props.announcement ? (
          <Announcement behavior='scroll' direction='left'>
            {props.announcement}
          </Announcement>
        ) : null}
      </Banner>
      <ImgContainer maxWidth={false} disableGutters={true}>
        <Img src={BoardImg} alt='' id='bgimg' height='450' width='850' />
        {props.game ? renderItems(game) : null}
      </ImgContainer>
    </OuterContainer>
  );
}

const Person = styled.span`
  position: absolute;
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
  max-width: 800px;
  background-color: #f1f7ed;
  border-radius: 5px;
  height: 400px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  padding: 10px;
  height: 70%;
  margin-top: 10px;
  text-align: center;
  min-width: 750px;
  margin-bottom: 0;
`;

const ImgContainer = styled(Container)`
  position: relative;
  border-radius: 5px;
  margin-left: 0;
`;

const Banner = styled.div`
  width: 100%;
  height: 35px;
  background-color: #9a8249;
  border-radius: 5px 5px 0 0;
`;

const Img = styled(Image)`
  border-radius: 0 0 5px 5px;
  height: 80%;
`;

const Announcement = styled.marquee`
  font-size: 1.5em;
  line-height: 1.6em;
  font-family: 'Josefin Slab';
  font-weight: 700;
  color: white;
`;
