import LandingPage from '../components/LandingPage';
import Container from '@mui/material/Container';
import Navbar from '../components/Navbar/Navbar';
import React, { useState, useEffect } from 'react';
import ActiveUsersList from '../components/ActiveUsersList';
import axios from 'axios';
import activeUsers from '../pages/_sampleData/activeUsers';
import GameInstructions from '../components/GameInstructions';

// const basePath = 'http://localhost:4030/blueocean/api/v1';
const basePath = `http://35.245.230.155:4040/blueocean/api/v1`;

export default function Home() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [activeList, setActiveList] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (activeUsers) {
      setIsLoaded(true);
      setActiveList(activeUsers);
    }
    // catch block for API call
    // setIsLoaded(true);
    // setError(error);
  }, []);

  if (error) {
    return <div>Error: {error.message} </div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <Navbar />
        <Container maxWidth={false} id='app-container'>
          <ActiveUsersList users={activeUsers} />

          <Container maxWidth={false} disableGutters={true} id="video-instructions-container">
            <Container maxWidth={false} disableGutters={true} id='video-container'>
              <div id="video-header">WELCOME TO WRATH OF ANUBIS</div>
              <iframe
                id="video-element"
                src='https://www.youtube.com/embed/OysJ4nL4jS8'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen></iframe>
            </Container>

            <Container maxWidth={false} id='instructions-container'>
              <div id="instructions-header">HOW TO PLAY</div>
              <div id="instructions-text">

              </div>
            </Container>
          </Container>
        </Container>
      </>
    );
  }
}
