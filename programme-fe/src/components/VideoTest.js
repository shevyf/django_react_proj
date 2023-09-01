import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ReactPlayer from 'react-player/youtube';
import addMarker from "../MarkerService";


class VideoTest extends Component {
  render() {
    addMarker('Video',{ATTR1: "videotest",ATTR2: "sovideosuchtest"})
    var url = "https://www.youtube.com/watch?v=gah1QXdYguQ";

    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <h3>Video Test</h3>
          </Col>
        </Row>
        <Row>
          <Col>
	    <ReactPlayer
		  url={url}
		  playing={true}
		  controls={true}
		  volume={0.5}
		  muted={true}
		/>
          </Col>
        </Row>
      </Container>
    );
  }
}


export default VideoTest;
