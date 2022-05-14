import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useRecoilValue } from 'recoil';
import { userState } from '../_states/tokenState';
import { useRouter } from 'next/router';
import Container from '@mui/material/Container';
import styled from 'styled-components';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateGame from './Lobby/CreateGame';

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
    headerName: 'MAX PLAYERS',
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

export default function GamesList(props) {
  const [value, setValue] = useState(0);
  const router = useRouter();
  const user = useRecoilValue(userState);
  const [showForm, setShowForm] = useState(false);

  const rows = props.games.map((game) => {
    let players = 'players: ' + game.playerAllowed;
    return {
      id: game._id,
      creatorName: game.ownerName,
      gameName: game.gameName,
      playersNum: players,
      createdAt: new Date(game.createdAt).toString(),
    };
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const onRowClick = (event) => {
    router.push(`/play/${event.id}/${user.userId}`);
  };

  const gameCreated = () => {
    setValue(0);
  };

  return (
    <Container style={{ height: 350, minWidth: '500px', maxWidth: '682px' }}>
      <TabsContainer
        tabindicatorprops={{
          style: { backgroundColor: '#9A8249', color: '#F1F7ED' },
        }}
        value={value}
        onChange={handleChange}
        aria-label='tabs'>
        <StyledTab label='Lobby' />
        <StyledTab label='Create' />
      </TabsContainer>

      {value === 0 ? (
        <DataGrid
          sx={{ border: 'none', width: '682px'}}
          density='compact'
          rows={rows}
          columns={columns}
          onRowClick={onRowClick}
        />
      ) : (
        <CreateGame handleChange={gameCreated} />
      )}
    </Container>
  );
}

const TabsContainer = styled(Tabs)`
  margin-left: 28px;
`;

const StyledTab = styled(Tab)`
  color: #9a8249;
`;
