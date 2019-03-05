import React from "react";
import { Container, Image, Segment, Header } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <Container text id="profile" textAlign="left">
        <Segment basic>
          <Image src="perfil.jpg" circular size="small" floated="left" />
          <Header>Gustavo Silva Paiva, {this.age()}</Header>
          Ouro Preto, Minas Gerais, Brazil
          <br />
          Backend Software Engineer (reason why this site sucks)
        </Segment>
      </Container>
    );
  }

  age() {
    var ageDifMs = Date.now() - new Date("04/27/1995").getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default Profile;
