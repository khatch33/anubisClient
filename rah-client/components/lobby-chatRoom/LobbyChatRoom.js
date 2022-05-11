import React, { useState, useEffect, useContext } from "react";
import List from "@mui/material/List";
import styled from "styled-components";
import { SocketContext } from "../../socket/socket";
import Container from "@mui/material/Container";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { userState } from "../../_states/tokenState";
import { useRecoilValue } from "recoil";
import { shadows } from "@mui/system";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function LobbyChatRoom() {
  const [chats, setChats] = useState([]);
  const [messages, setMessages] = useState([]);
  const userData = useRecoilValue(userState);

  const socket = useContext(SocketContext);

  //put where online players are.
  useEffect(() => {
    // socket.on('joined-lobby', (user) => {
    //   console.log('user', user);
    // });

    socket.on("receive-message-lobby", (user, message) => {
      console.log(user);
      // message = {user:}
      setMessages([...messages, message]);
    });
  });
  //socket.on('lobby-message-recieved', { username: 'josh' })
  //building up message to display
  // useEffect(() => {
  //   socket.on('receive-message', (user, msg) => {
  //     const copyChat = [...chats]
  //     copyChat.push({user, msg})
  //     setChats(copyChat)
  //   })
  // })
  const alignMessage = (message) => {
    if (message.username === userData.userName) {
      return "chatMessage-right";
    } else {
      return "chatMessage-left";
    }
  };

  return (
    // <StyledChatBox id="chatMessages-container">
    //   {messages.map((message) => {
    //     console.log(message)
    //     return <div className="chatMessage">{message.username}: {message.text}</div>
    //   })}
    // </StyledChatBox>

    // <StyledChatBox disableGutters={true} maxWidth={false} id="chatList-container">
    //   <StyledBox>
    //     <Typography
    //       variant="h6"
    //       noWrap
    //       component="p"
    //       sx={{
    //         fontFamily: 'monospace',
    //         fontWeight: 700,
    //         letterSpacing: '.3rem',
    //         color: 'inherit',
    //         textDecoration: 'none'
    //       }}>
    //       CHAT
    //       </Typography>
    //   </StyledBox>
    //   <div style={{display: 'flex', flexDirection: 'column'}}>
    //     <List id="chatList">
    //     {messages.map((message) => {
    //       console.log(message)
    //       return <ListItem key={JSON.stringify(message)} sx={{boxShadow: 1}} className={`chatMessage ${alignMessage(message)}`}><ListItemText secondary={`${message.username}: ${message.text}`}/></ListItem>
    //     })}
    //     </List>
    //   </div>
    // </StyledChatBox>

    <StyledChatBox
      disableGutters={true}
      maxWidth={false}
      id="chatList-container"
    >
      <StyledBox>
        <Typography
          variant="h6"
          noWrap
          component="p"
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          CHAT
        </Typography>
      </StyledBox>
      <div id="chatList-outerContainer">
        <div id="chatList">
          {messages.map((message) => {
            console.log(message);
            return (
              <div key={JSON.stringify(message)} className={`message-container ${alignMessage(message)}`} >
                  <span className="chatUser">{`${message.username}: `}</span>
                  <span className="chatMessage">{message.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </StyledChatBox>
  );
}

const StyledChatBox = styled(Container)`
  border: 1px solid gray;
  border-bottom: none;
  height: 100%;
  overflow-y: scroll;
  width: 100%;
`;

const StyledBox = styled(Box)`
  height: 35px;
  box-shadow: 1;
  width: 100%;
  background-color: #9a8249;
  text-align: center;
  color: white;
  position: sticky;
  top: 0px;
  z-index: 1;
`;
