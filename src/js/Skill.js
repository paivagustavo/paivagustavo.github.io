import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Progress percent={this.props.percent} indicating>
        {this.props.skill}
      </Progress>
    );
  }
}

export default Skill;
