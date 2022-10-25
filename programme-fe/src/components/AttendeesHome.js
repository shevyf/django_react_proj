import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import AttendeesList from "./attendees/AttendeesList";
import NewAttendeeModal from "./attendees/NewAttendeeModal";
import { inject, observer } from "mobx-react";


var AttendeesHome = inject('store')(
  observer(
    class AttendeesHome extends Component {
      componentDidMount() {
        this.resetState();
      }

      sortByName(data){
        data.sort((a,b) => {
          if (a.name < b.name)
            return -1;
          if (a.name > b.name)
            return 1;
          return 0;
        })
      }

      resetState = () => {
        this.props.store.loadAttendees();
      };

      render() {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col>
                <AttendeesList
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewAttendeeModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Container>
        );
      }
    }
  )
)


export default AttendeesHome;