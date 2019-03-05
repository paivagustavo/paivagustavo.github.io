import React, { Component } from "react";
import { Container, List } from "semantic-ui-react";

class Contact extends Component {
  render() {
    return (
      <Container as="div" align="right">
        <List horizontal>
          <List.Item>
            <List.Header
              as="a"
              href="https://github.com/paivagustavo"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </List.Header>
          </List.Item>

          <List.Item>
            <List.Header
              as="a"
              href="https://www.linkedin.com/in/guustavopaiva/"
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin
            </List.Header>
          </List.Item>
        </List>
        <br />
        Email:
        <a
          href="mailto:guustavo.paiva@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          {" "}
          guustavo.paiva@gmail.com
        </a>
      </Container>
    );
  }
}

export default Contact;
