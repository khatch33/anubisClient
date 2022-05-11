import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography'
import React from 'react'

export default function PlayerCard(props) {
  const player = props.player
  const username = player.player.userName
  const alive = player.status
  const phase = props.phase
  const role = props.role

  const renderActionButton = () => {

    if (phase === 'night') {
      if (role === 'villager') {
        return
      } else if (role === 'doctor') {
        return <button>Save</button>
      } else if (role === 'wolf') {
        return <button>Kill</button>
      } else if (role === 'seer') {
        return <button>Check if Wolf</button>
      }
    } else if (phase === 'day2' || phase === 'day3') {
      return <button>accuse</button>
    }
  }
  return (
    <Card key={'pc' + username} className={`playerCard alive-${alive}`}>
      <h5 key={'pc' + username}>{username}</h5>
      <img className="userAvatar" src={`${player.img}`} alt=""/>
      {alive? null : <h3>Killed Off</h3>}
      <div>
        {alive ? renderActionButton() : null}
      </div>

    </Card>
  )

}