
import LandingPage from '../components/LandingPage';
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", textAlign: "center" }}> REPLACE ME WITH NAV </div>
      <Container maxWidth={false} id="app-container">
        <Container id="activePlayers-container">
          <h1>Active Players</h1>
        </Container>

        <Container maxWidth={false}>
          <Container maxWidth={false} id="video-container">
            <h1>Video Player</h1>
          </Container>

          <Container maxWidth={false} id="instructions-container">
            <h1>Instructions</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum.
            </p>
          </Container>
        </Container>
      </Container>
    </>
  );
}
