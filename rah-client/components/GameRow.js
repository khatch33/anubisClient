import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
import Link from 'next/link'
export default function GameRow (props) {
  let game = props.game
  let creator = game.owner
  let gameName = game.gameName
  console.log(typeof game.players)
  let players = 'players: ' + game.players.length.toString() + '/' + game.playerAllowed
  let gameRoomUrl = '/play/' + game.id + "/" + playerId
  // const choseGame = (game) => {

  // }
  return (
    <Grid onClick={() => choseGame(game)} container columnSpacing={5}>
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