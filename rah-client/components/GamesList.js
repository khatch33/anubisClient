
import React, {useState} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import {useRecoilValue} from 'recoil'
import {userState} from '../_states/tokenState'
import {useRouter} from 'next/router'

const columns = [
  {
    field: 'creatorName',
    headerName: 'CREATOR',
    type: 'string',
    width: 170,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'gameName',
    headerName: 'GAME NAME',
    type: 'string',
    width: 170,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'playersNum',
    headerName: 'PLAYERS',
    type: 'number',
    width: 170,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'createdAt',
    headerName: 'CREATED AT',
    type: 'string',
    width: 170,
    editable: false,
    headerAlign: 'center',
  },
];
//{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },

export default function GamesList({games}) {
const router = useRouter()
  const user = useRecoilValue(userState)
  const [showForm, setShowForm] = useState(false)
  var gameIdd;
  const rows = games.map((game) => {
    let players = 'players: ' + game.players.length.toString() + '/' + game.playerAllowed
    return {id: game._id, creatorName: game.ownerName, gameName: game.gameName, playersNum: players, createdAt: new Date(game.createdAt).toString()}
  });

const yesClick = () => {
  router.push(`/play/${gameIdd}/${user.userId}`)
}

const noClick = () => {
  setShowForm(false)
}

const onRowClick = (event) => {
  gameIdd = event.id
  console.log(event.id)
  router.push(`/play/${event.id}/${user.userId}`)
  //setShowForm(true)
}


  return (
    <div style={{ height: 350, width: '100%' }}>
      <DataGrid
        sx={{border: 'none'}}
        density="compact"
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
        hideFooter={true}
      />
    {showForm && <><button onClick={yesClick}>Go!</button><button onClick={noClick}>No!</button></>}
    </div>
  );
}