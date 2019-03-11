import { List } from "semantic-ui-react";

var React = require("react");

const experiences = [
  {
    place: "Stilingue",
    position: "Backend Software Engineer",
    location: "Ouro Preto, Brazil",
    time: "September, 2016 - Current",
    description: props => (
      <List bulleted>
        <List.Item>
          Implemented microservices archictecture using Spring Cloud. Including
          API Gateway, Service Discovery, Configuration Server and serveral
          other components.
        </List.Item>
        <List.Item>Migrated applications to be cloud native.</List.Item>
        <List.Item>
          Containerized Java Spring microservices to run on Kubernetes.
        </List.Item>
        <List.Item>
          Implemented a Gitlab CI pipeline. Providing continuous integration,
          unit testing and lint checking for several java projects onwed by the
          backend team.
        </List.Item>
        <List.Item>
          Built several social network crawlers (Facebook, Instagram, Twitter
          and YouTube).
        </List.Item>
      </List>
    )
  }
];

export default experiences;
