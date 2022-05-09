import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Link from 'next/link'
export default function GameRow (props) {
  let game = props.game
  let creator = game.owner
  let gameName = game.gameName
  let players = 'players: ' + game.players.length.toString() + '/' + game.playerAllowed
  let gameRoomUrl = '/play/' + game.id + '/' + '3333'
  // const choseGame = (game) => {

  // }
  return (
    <Grid container columnSpacing={5}>
        <Grid item>
          <p>{creator}</p>
        </Grid>
        <Grid item><p>{gameName}</p>
        </Grid>
        <Grid item><p>{players}</p>
        </Grid>
        <Grid item>
          <Link href={gameRoomUrl}>
            <a>View Game</a>
          </Link>
        </Grid>
    </Grid>
  )
}