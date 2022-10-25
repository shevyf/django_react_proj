import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import LocationsList from "./locations/LocationsList";
import NewLocationModal from "./locations/NewLocationModal";
import { inject, observer } from "mobx-react";


var LocationsHome = inject('store')(
  observer(
    class LocationsHome extends Component {
      componentDidMount() {
        this.resetState();
      }

      resetState = () => {
        this.props.store.loadLocations();
      };

      render() {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col>
                <LocationsList
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewLocationModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Container>
        );
      }
    }
  )
)


export default LocationsHome;