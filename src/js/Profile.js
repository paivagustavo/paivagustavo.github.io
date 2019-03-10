import React from "react";
import { Container, Image, Segment, Header } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <Container id="profile" textAlign="center">
        <Segment basic>
          <h2>
            Hey there, I'm Gustavo.
          </h2>
          <Image src="perfil.jpg" circular centered size="small" />

          Professional developer since 2016, mainly a Backend Developer,
          <p></p>
          but also enjoy doing a little of infra tasks and rarely some frontend (as you can seen not that great).
        </Segment>
      </Container >
    );
  }

  age() {
    var ageDifMs = Date.now() - new Date("04/27/1995").getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default Profile;
