import React, { useState } from 'react';
import Grid from '@mui/material/Grid'
export default function (props) {
  let game = props.game
  let creator = game.owner
  let gameName = game.gameName
  //let players = game.players.length.toString() + '/' + game.player.allowed

  return (
    <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={2}>{creator}
        </Grid>
        <Grid item xs={2}>{gameName}
        </Grid>
        <Grid item xs={2}>players>
        </Grid>
    </Grid>
  )
}