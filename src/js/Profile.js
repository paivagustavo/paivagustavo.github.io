import React from "react";
import { Container, Image, Segment } from "semantic-ui-react";

class Profile extends React.Component {
  render() {
    return (
      <Segment basic className="profile" textAlign="center">
        <h2>Hey there, I'm Gustavo.</h2>
        <Image src="perfil.jpg" circular centered size="medium" />
        <Segment basic className="profile-description">
          Developer since 2016 mainly Backend but also enjoy doing a little of
          infra tasks and rarely some frontend.
        </Segment>
      </Segment>
    );
  }

  age() {
    var ageDifMs = Date.now() - new Date("04/27/1995").getTime();
    var ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

export default Profile;
