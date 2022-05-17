import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../socket/socket';
import { userState } from '../_states/tokenState';
import { useRecoilValue, useRecoilState } from 'recoil';
import Typography from '@mui/material/Typography';
import { friendsState } from '../_states/friendslist';
import axios from 'axios';

export default function ActiveUsersList() {
  const socket = useContext(SocketContext);
  const userData = useRecoilValue(userState);
  const [usersList, setUsersList] = useState([]);
  const [globalUsersList, setGlobalUsersList] = useRecoilState(friendsState);

  const avatars = [
    '/_next/static/media/icon3.9872b9c5.png',
    '/_next/static/media/icon2.37800c5f.png',
    '/_next/static/media/icon3.9872b9c5.png',
    '/_next/static/media/icon4.e31317e0.png',
    '/_next/static/media/icon5.173d920f.png',
  ];

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem('userToken'));
    socket.on('receive-lobby', (users) => {
      console.log(users);
      setUsersList(users);
      // setGlobalUsersList(users);
    });
    socket.on('error', (err) => {
      console.error(err);
    });
    return () => {
      socket.emit('join-room', userData, 'lobby');
    };
  }, [socket, usersList]);

  const friendAdd = () => {
    axios.put(`http://${process.env.REACT_APP_URL}/blueocean/api/v1/users/togglefriends`, {
      headers: {
        Authorization: `Bearer ${userData.userToken}`,
      },
      user_id: userData.userId,
    });
  };

  return (
    <div id='activeUsers-outerContainer'>
      <Title id='activeUsers-header'>ONLINE PLAYERS</Title>
      <Container disableGutters={true} maxWidth={false} id='activeUsers-container'>
        {!usersList.length ? (
          <div style={{ textAlign: 'center', marginTop: '5px' }}>No active users</div>
        ) : (
          usersList.map((user) => (
            <div key={JSON.stringify(user)} className='activeUser-item'>
              <div id='activeUsersList-container'>
                <div className='activeUsers-username'>
                  <img
                    className='userAvatar'
                    src={!user.img || user.img === '' ? avatars[0] : user.img}
                    height={'33'}
                    width={'33'}
                  />
                  <span className='userName'>{user.userName}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </Container>
    </div>
  );
}

const Title = styled(Typography)`
  font-family: 'Josefin Slab';
  text-align: center;
  letter-spacing: 0.1rem;
  padding-top: 6px;
  font-weight: 700;
  color: #f1f7ed;
  font-weight: 700;
  letter-spacing: 0.2rem;
  line-height: 1.6;
  padding-top: 5px;
  font-size: 1.1rem;
`;
