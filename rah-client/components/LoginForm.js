import React, { useState } from 'react';
// import axios from 'axios';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import styled from 'styled-components';

// const Button = styled.button`
//   width: 200px;
//   height: 100px;
//   padding: 3px;
//   margin: 5px;
// `;

export default function LoginForm() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    // axios({
    //   method: 'post',
    //   url: '/authentication',
    //   data: {username: username, password: password, jwtToken: ''}
    // })
    //   .then((res) => res)
    //   .catch((err) => err);
    console.log('username: ', username);
    console.log('password: ', password);
  }

  return (
      <Container maxWidth="sm" id="login-container">
        <TextField label="Username" variant="standard" name="username" onChange={(e) => setUsername(e.target.value)} />
        <TextField label="Password" name="password" variant="standard" onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={(e) => handleSubmit(e)}>Login</button>
      </Container>
  )
}
