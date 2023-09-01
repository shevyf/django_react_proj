import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";


class IframeTest extends Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <h3>Iframe Test</h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <iframe src="/iframe.html" name="iframetest" width="90%" height="500" style={{border: "1px solid black;"}}>
            </iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default IframeTest;
