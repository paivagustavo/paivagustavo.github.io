import React, { Component } from "react";
import "../css/timeline.scss";

class Event extends Component {
  render() {
    return (
      <div class="timeline-event">
        <div class="timeline-img cd-picture" />

        <div class="timeline-event-content">
          <h2>{this.props.place}</h2>
          <div class="timeline-event-header">
            <span class="timeline-event-title"> {this.props.title} </span>
            <span class="timeline-event-date"> {this.props.year} </span>
          </div>

          <div class="timeline-event-description">{this.props.description}</div>
        </div>
      </div>
    );
  }
}

export default Event;
