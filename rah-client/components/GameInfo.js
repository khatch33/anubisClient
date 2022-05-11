import React, { useState } from 'react';

export default function GameInfo (props) {
  const game = props.game
  const info = props.info
  return (
    <div>
      <button onClick={props.close}>exit</button>
      <h2>Your role: {info.role}</h2>
      <h4>Players Left: {info.playersLeft}</h4>
      <h4>Wolf's Left: {info.wolfsLeft}</h4>
      <h4>Doctor's Left: {info.doctorsLeft}</h4>
      <h4>Seer's Left: {info.seersLeft}</h4>
      <h4>Night: {game.phase}</h4>
    </div>
  )
}