import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ItemList from "./items/ItemList";
import NewItemModal from "./items/NewItemModal";
import { inject, observer } from "mobx-react";

import axios from "axios";

import { ITEMS_API_URL } from "../constants";

var ItemsHome = inject('store')(
  observer(
    class ItemsHome extends Component {
      state = {
        items: []
      };

      componentDidMount() {
        this.resetState();
      }


      getItems = () => {
        axios.get(ITEMS_API_URL).then(res => {
            var data = res.data;
            data.sort((a,b) => {
              if (a.time === null)
                  return 1;
              if (b.time === null)
              return -1;
              if (a.time < b.time)
                return -1;
              if (a.time > b.time)
                return 1;
              return 0;
            })
            data.map(item => item.location = this.props.store.locationFromId(item.location))
            data.map(item => item.moderator = this.props.store.moderatorFromId(item.moderator))
            this.setState({ items: data })
          });
      };

      resetState = () => {
        this.getItems();
      };

      render() {
        return (
          <Container style={{ marginTop: "20px" }}>
            <Row>
              <Col>
                <ItemList
                  items={this.state.items}
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewItemModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Container>
        );
      }
    }
  )
)


export default ItemsHome;