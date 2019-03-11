import React from "react";
import "../css/Skills.scss";
import { Grid, Item, GridColumn, Segment } from "semantic-ui-react";

class SkillSet extends React.PureComponent {
  render() {
    return (
      <Segment className="skills">
        <Grid columns={2} divided stackable>
          <GridColumn>
            <Item>
              <Item.Image
                size="tiny"
                floated="left"
                src="http://www.stickpng.com/assets/images/58480a44cef1014c0b5e4917.png"
              />

              <Item.Content>
                <Item.Header as="a">Kubernetes</Item.Header>
                <Item.Meta>Container Orchestration</Item.Meta>
                <Item.Description>
                  Experience using Kubernetes to deploy applications. Usage of
                  deployments with probes to give zero downtime upgrades.
                  Services to expose them to the internet and helm to deploy
                  several third party applications.
                </Item.Description>
              </Item.Content>
            </Item>
          </GridColumn>
          <GridColumn>
            <Item>
              <Item.Image
                size="tiny"
                floated="left"
                src="https://cdn-images-1.medium.com/max/1200/1*Ry69aqzJ_CJQly2p6BL3Qw.png"
              />

              <Item.Content>
                <Item.Header as="a">Microservices</Item.Header>
                <Item.Meta>Application Architecture</Item.Meta>
                <Item.Description>
                  Experience designing and implemeting fine grained
                  microservices applications with Spring Cloud.
                </Item.Description>
              </Item.Content>
            </Item>
          </GridColumn>
        </Grid>
      </Segment>
    );
  }
}

export default SkillSet;
