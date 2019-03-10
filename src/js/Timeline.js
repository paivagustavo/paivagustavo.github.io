import React, { Component } from "react";
import Event from "./Event";

export default class Timeline extends Component {
  render() {
    return (
      <div className="timeline">
      {this.props.experiences.map(function(exp) {
              return (
                <Event className="experience"
                place = {exp.place}
                title = {exp.position}
                year = {exp.time}
                description = {exp.description}/>
              );
            })}
        <Event
          place="Stilingue"
          title="Backend Software Engineer"
          description="My first job as a Software Engineer, started at the end of my graduation. Learned how to code professionaly, basics skills such as Git, Code Review, Semantic Versioning but was also able to quickly catch up and try the cutting edge technology and code design patterns, for example: 
          - Building scalable and extensible data processing pipelines to crawl and process posts from social media such as Facebook and Twitter; 
          - Transition from monolithic to microservice based architecture with Spring Boot, Spring Cloud and Consul; 
          - NoSQL databases such as MongoDB and Solr; "
          year="2016"
        />
        <Event
          place="Stilingue"
          title="Backend Software Engineer"
          description="My first job as a Software Engineer, started at the end of my graduation. Learned how to code professionaly, basics skills such as Git, Code Review, Semantic Versioning but was also able to quickly catch up and try the cutting edge technology and code design patterns, for example: 
        - Building scalable and extensible data processing pipelines to crawl and process posts from social media such as Facebook and Twitter; 
        - Transition from monolithic to microservice based architecture with Spring Boot, Spring Cloud and Consul; 
        - NoSQL databases such as MongoDB and Solr; "
          year="2016"
        />
      </div>
    );
  }
}
