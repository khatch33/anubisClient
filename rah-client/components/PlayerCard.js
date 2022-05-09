import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import React from 'react'

export default function PlayerCard(props) {
  const player = props.player
  const username = player.userName
  const phase = props.phase
  const role = props.role
  const renderActionButton = () => {
    if (phase === 'night') {
      if (role === 'villager') {
        return
      } else if (role === 'doctor') {
        return <button>save</button>
      } else if (role === 'wolf') {
        return <button>Kill</button>
      }
    }
  }
  return (
    <Card class='playerCard'>
      <h5>{username}</h5>
      <img className="userAvatar" src={`${player.img}`} alt=""/>
      {renderActionButton()}
    </Card>
  )

}