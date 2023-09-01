import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ItemsHome from "./components/ItemsHome";
import LocationsHome from "./components/LocationsHome";
import AttendeesHome from "./components/AttendeesHome";
import IframeTest from "./components/IframeTest";
import VideoTest from "./components/VideoTest";
import { inject, observer } from "mobx-react";
import { Col, Container, Row } from "reactstrap";
import { Route, Routes } from 'react-router-dom';
import addMarker from './MarkerService.js';

var App = inject("store")(
    class App extends Component {
      componentWillMount() {
        this.props.store.loadLocations();
        this.props.store.loadAttendees();
      }

      componentDidUpdate() {
	console.log('did update')
	addMarker('TEST',{ATTR1: "test",ATTR2: "samophlange"})
      }

      render() {
        return (
        <Container style={{ maxWidth: "1000px" }}>
          <Col>
            <Row>
              <Header />
            </Row>
            <Row>
              <Routes>
                <Route path="/programme" element={ <ItemsHome/> }/>
                <Route path="/locations" element={ <LocationsHome/> }/>
                <Route path="/attendees" element={ <AttendeesHome/> }/>
		<Route path="/iframetest" element={ <IframeTest/> }/>
                <Route path="/videotest" element={ <VideoTest/> }/>
		<Route exact path="/" element={ <ItemsHome/> }/>
              </Routes>
            </Row>
          </Col>
        </Container>
        );
      }
    }
)


export default App;
