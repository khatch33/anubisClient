import React, { useState } from 'react';
import styled from 'styled-components';
import { shadows } from '@mui/system';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function GameInstructions (props) {
  const game = props.game
  const info = props.info


  return (
    <StyledContainer style={{backgroundColor: 'rgba(255, 255, 255, 0.9)'}}>
      <StyledCard>
        <h3>Instructions</h3>
        <ol>
          <li>Each player will be randomly assigned one of the following roles:</li>
            <ul>
              <li>Anubis</li>
              <li>Doctor</li>
              <li>Seer</li>
              <li>Villager</li>
            </ul>
        </ol>



        <Button onClick={props.close}>X</Button>
      </StyledCard>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  display: flex;
  justify-content: center;
  text-align: center;
  height: 300px;
`;

const StyledCard = styled(Card)`
  background-color: #F1F7ED;
  margin: 5px;
  padding: 5px;
  width: 500px;
`;

const GameInfoCard = styled(Card)`

  height: fit-content;
  margin: 5px;
  padding: 5px;
  width: 350px;
`;

const Button = styled.button`
  align-self: flex-start;
  background-color: #9a824991;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  float: right;
  height: fit-content;
  margin: 5px;
  position: relative;
  width: fit-content;
`;
