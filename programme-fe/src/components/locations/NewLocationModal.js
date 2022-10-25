import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewLocationForm from "./NewLocationForm";

class NewLocationModal extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState(previous => ({
      modal: !previous.modal
    }));
  };

  render() {
    const create = this.props.create;

    var title = "Editing Location";
    var button = <Button size="sm" onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Location";

      button = (
        <Button
          color="primary"
          className="float-right"
          onClick={this.toggle}
          style={{ minWidth: "200px" }}
        >
          Create New
        </Button>
      );
    }

    return (
      <Fragment>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>{title}</ModalHeader>

          <ModalBody>
            <NewLocationForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              location={this.props.location}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewLocationModal;