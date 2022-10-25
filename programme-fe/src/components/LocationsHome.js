import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ItemList from "./items/ItemList";
import NewItemModal from "./items/NewItemModal";
import { inject, observer } from "mobx-react";


var ItemsHome = inject('store')(
  observer(
    class ItemsHome extends Component {
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
                <LocationsList
                  items={this.props.store.locations}
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


export default ItemsHome;