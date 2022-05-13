import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useRecoilValue } from "recoil";
import { userState } from "../_states/tokenState";
import { useRouter } from "next/router";
import Container from "@mui/material/Container";
import styled from "styled-components";


import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const columns = [
  {
    field: "creatorName",
    headerName: "CREATOR",
    type: "string",
    width: 170,
    editable: false,
    headerAlign: "center",
  },
  {
    field: "gameName",
    headerName: "GAME NAME",
    type: "string",
    width: 170,
    editable: false,
    headerAlign: "center",
  },
  {
    field: "playersNum",
    headerName: "PLAYERS",
    type: "number",
    width: 170,
    editable: false,
    headerAlign: "center",
  },
  {
    field: "createdAt",
    headerName: "CREATED AT",
    type: "string",
    width: 170,
    editable: false,
    headerAlign: "center",
  },
];
//{ id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },

export default function GamesList(props) {
  const router = useRouter();
  const user = useRecoilValue(userState);
  const [showForm, setShowForm] = useState(false);
  var gameIdd;
  const rows = props.games.map((game) => {
    let players =
      "players: " + game.players.length.toString() + "/" + game.playerAllowed;
    return {
      id: game._id,
      creatorName: game.ownerName,
      gameName: game.gameName,
      playersNum: players,
      createdAt: new Date(game.createdAt).toString(),
    };
  });

  const yesClick = () => {
    router.push(`/play/${gameId}/${user.userId}`);
  };

  const noClick = () => {
    setShowForm(false);
  };

  const onRowClick = (event) => {
    gameIdd = event.id;
    console.log(event.id);
    router.push(`/play/${event.id}/${user.userId}`);
    //setShowForm(true)
  };

  return (
    <Container style={{ height: 350, minWidth: "500px", maxWidth: "675px" }}>
      <TabsContainer
        TabIndicatorProps={{
          style: { backgroundColor: "#9A8249", color: "#F1F7ED" },
        }}
        value={props.value}
        onChange={props.handleChange}
        aria-label="tabs"
      >
        <StyledTab label="Lobby" />
        <StyledTab label="Create" />
      </TabsContainer>

      <DataGrid
        sx={{ border: "none" }}
        density="compact"
        rows={rows}
        columns={columns}
        onRowClick={onRowClick}
      {showForm && (
        <>
          <button onClick={yesClick}>Go!</button>
          <button onClick={noClick}>No!</button>
        </>
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
