import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import ItemList from "./items/ItemList";
import NewItemModal from "./items/NewItemModal";

import axios from "axios";

import { ITEMS_API_URL } from "../constants";

class ItemsHome extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.resetState();
  }

  sortByTime(data){
    data.sort((a,b) => {
      if (a.time < b.time)
        return -1;
      if (a.time > b.time)
        return 1;
      return 0;
    })
  }

  getItems = () => {
    axios.get(ITEMS_API_URL).then(res => {
        var data = res.data;
        data.sort((a,b) => {
          if (a.time < b.time)
            return -1;
          if (a.time > b.time)
            return 1;
          return 0;
        })
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

export default ItemsHome;