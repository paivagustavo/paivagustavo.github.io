import React, { Component } from "react";
import "../css/Resume.css";
import "semantic-ui-css/semantic.min.css";
import Profile from "./Profile";
import Contact from "./Contact";
import { Grid, Container, GridRow, Segment } from "semantic-ui-react";
import Experience from "./Experience";
import experiences from "./Experiences";

class Resume extends Component {
  render() {
    return (
      <Container className="main-wrapper">
        <Segment>
          <Grid
            padded
            inverted
            divided
            columns={2}
            stackable
            className="profile-background"
            verticalAlign="middle"
          >
            <Grid.Column inverted verticalAlign="middle">
              <Profile />
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Contact />
            </Grid.Column>
          </Grid>

          <Grid padded>
            {experiences.map(function(experience) {
              return (
                <GridRow className="experience">
                  <Experience exp={experience} />
                </GridRow>
              );
            })}
          </Grid>
        </Segment>
      </Container>
    );
  }
}

export default Resume;
