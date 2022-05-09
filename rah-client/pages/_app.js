import { RecoilRoot } from 'recoil';
import '../styles/globals.css'
import CssBaseline from '@mui/material/CssBaseline';
import {SocketContext, socket } from '../socket/socket.js'
function MyApp({ Component, pageProps }) {
  return (
    <>

      <RecoilRoot>
        <SocketContext.provider value={socket}>
          <CssBaseline />
          <Component {...pageProps} />
        </SocketContext.provider>
      </RecoilRoot>
    </>
  )
}

export default MyApp
