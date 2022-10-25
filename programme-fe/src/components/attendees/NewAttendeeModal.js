import React, { Component, Fragment } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import NewAttendeeForm from "./NewAttendeeForm";

class NewAttendeeModal extends Component {
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

    var title = "Editing Attendee";
    var button = <Button size="sm" onClick={this.toggle}>Edit</Button>;
    if (create) {
      title = "Creating New Attendee";

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
            <NewAttendeeForm
              resetState={this.props.resetState}
              toggle={this.toggle}
              attendee={this.props.attendee}
            />
          </ModalBody>
        </Modal>
      </Fragment>
    );
  }
}

export default NewAttendeeModal;