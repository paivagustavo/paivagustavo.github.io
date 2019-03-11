import React, { Component } from "react";
import "../css/Resume.scss";
import Profile from "./Profile";
import Contact from "./Contact";
import { Grid, GridRow } from "semantic-ui-react";
import experiences from "./Experiences";
import Timeline from "./Timeline";
import SkillSet from "./SkillSet";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid verticalAlign columns={1} className="site-grid">
          <GridRow className="site-section">
            <Profile />
            <Contact />
          </GridRow>
          <GridRow className="site-section">
            <SkillSet />
          </GridRow>
          <GridRow className="site-section">
            <Timeline experiences={experiences} />
          </GridRow>
        </Grid>
      </div>
    );
  }
}

export default Resume;
