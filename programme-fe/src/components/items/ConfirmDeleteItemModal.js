import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";

import axios from "axios";

import { ITEMS_API_URL } from "../../constants";

class ConfirmDeleteItemModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  deleteItem = pk => {
    axios.delete(ITEMS_API_URL + pk).then(() => {
      this.props.resetState();
      this.toggle();
    });
  };

  render() {
    const { item } = this.props;
    return (
      <Fragment>
        <Button color="danger" size="sm" onClick={() => this.toggle()}>
          Delete
        </Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>
            Do you really want to delete this programme item?
          </ModalHeader>
          <ModalBody>
            <h3>
              {item.title}
            </h3>
            <p>
              {item.description}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button type="button" onClick={() => this.toggle()}>
              Cancel
            </Button>
            <Button
              type="button"
              color="primary"
              onClick={() => this.deleteItem(item.pk)}
            >
              Yes
            </Button>
          </ModalFooter>
        </Modal>
      </Fragment>
    );
  }
}

export default ConfirmDeleteItemModal;