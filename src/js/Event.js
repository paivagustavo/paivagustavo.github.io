import React, { Component } from "react";
import "../css/timeline.scss";
import sr from "./ScrollReveal";

class Event extends Component {
  componentDidMount = () => {
    const config = {
      origin: "left",
      duration: 1000,
      delay: 250,
      distance: "0px",
      scale: 1,
      easing: "ease"
    };

    sr.reveal(".timeline-event-content", config);
  };

  render() {
    return (
      <div className="timeline-event">
        <span className="timeline-img cd-picture" />

        <div className="timeline-event-content">
          <h2>{this.props.place}</h2>
          <div className="timeline-event-header">
            <span className="timeline-event-title"> {this.props.title} </span>
            <span className="timeline-event-date"> {this.props.year} </span>
          </div>

          <div className="timeline-event-description">
            {this.props.description()}
          </div>
        </div>
      </div>
    );
  }
}

export default Event;
