import React, { Component } from "react";
import Event from "./Event";

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
        {this.props.experiences.map(function(exp) {
          return (
            <Event
              className="experience"
              place={exp.place}
              title={exp.position}
              year={exp.time}
              description={exp.description}
            />
          );
        })}

        {this.props.experiences.map(function(exp) {
          return (
            <Event
              className="experience"
              place={exp.place}
              title={exp.position}
              year={exp.time}
              description={exp.description}
            />
          );
        })}

        {this.props.experiences.map(function(exp) {
          return (
            <Event
              className="experience"
              place={exp.place}
              title={exp.position}
              year={exp.time}
              description={exp.description}
            />
          );
        })}
      </div>
    );
  }
}
