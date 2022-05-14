import Container from '@mui/material/Container';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { SocketContext } from '../socket/socket';
import uuid from 'react-uuid';
import { userState } from '../_states/tokenState';
import { useRecoilValue, useRecoilState } from 'recoil';
import Typography from '@mui/material/Typography';
import { friendsState } from '../_states/friendslist';
import Image from 'next/Image';

export default function ActiveUsersList() {

  const socket = useContext(SocketContext);
  const userData = useRecoilValue(userState);
  const [usersList, setUsersList] = useState([]);
  const [globalUsersList, setGlobalUsersList] = useRecoilState(friendsState);
  const avatars = ["/_next/static/media/icon3.9872b9c5.png", "/_next/static/media/icon2.37800c5f.png", "/_next/static/media/icon3.9872b9c5.png", "/_next/static/media/icon4.e31317e0.png icon4", "/_next/static/media/icon5.173d920f.png"]

  useEffect(() => {
    socket.on('receive-lobby', (users) => {
      setUsersList(users);
      console.log(users, 'users');
      setGlobalUsersList(users);
    });
    socket.on('error', (err) => {
      console.error(err);
    });
    return () => {
      socket.emit('join-room', userData, 'lobby');
    };
  }, []);

  const friendAdd = () => {
    const url = '/togglefriends';
    axios.put(`http://${process.env.REACT_APP_URL}/api/v1/users/togglefriends`, {
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
        {!usersList.length ? <div style={{textAlign: 'center', marginTop: '5px'}}>No active users</div> : usersList.map((user) => (
          <div key={JSON.stringify(user)} className='activeUser-item'>
            <div id='activeUsersList-container'>
              <div className='activeUsers-username'>
                <Image className='userAvatar' src={!user.img || user.img === "" ? avatars[Math.floor(Math.random() * 5) + 1] : user.img } height="32" width="32" />
                <span className='userName'>{user.userName}</span>
              </div>
              <span className='activeUsers-rank'> {userData.score ? userData.score : ''} </span>
            </div>
          </div>
        ))}
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
  font-size: 1.25rem;
`;
