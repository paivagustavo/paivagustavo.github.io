import React, { Component } from "react";
import "../css/Resume.css";
import "semantic-ui-css/semantic.min.css";
import Profile from "./Profile";
import Contact from "./Contact";
import { Segment } from "semantic-ui-react";
import experiences from "./Experiences";
import Timeline from "./Timeline";

class Resume extends Component {

  render() {
    return (
      <div>
        <Segment className="main-wrapper">
          <Profile />
        </Segment>
        <Contact />

        <Timeline experiences={experiences} />
      </div>
    );
  }
}

export default Resume;
