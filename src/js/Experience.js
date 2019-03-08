import React, { Component } from "react";
import { Message } from "semantic-ui-react";
import Skill from "./Skill";
class Experience extends Component {
  render() {
    const exp = this.props.exp;

    return (
      <Message size="tiny">
        <Message.Header>{exp.position} </Message.Header>
        {exp.place} - {exp.location}
        <span className="exp-time"> {"(" + exp.time + ")"}</span>
        <p dangerouslySetInnerHTML={{ __html: exp.description }} />
      </Message>
    );
  }
}

export default Experience;
