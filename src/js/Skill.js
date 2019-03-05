import React, { Component } from "react";
import { Progress } from "semantic-ui-react";

class Skill extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Progress percent={this.props.percentage} />;
  }
}

export default Skill;
