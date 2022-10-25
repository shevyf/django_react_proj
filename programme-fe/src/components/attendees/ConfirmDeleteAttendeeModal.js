import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import { inject } from "mobx-react";


var ConfirmDeleteAttendeeModal = inject('store')(
    class ConfirmDeleteAttendeeModal extends Component {
      state = {
        modal: false
      };

      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };

      deleteAttendee = pk => {
        this.props.store.deleteAttendee(pk);
        this.toggle();
      };

      render() {
        const { attendee } = this.props;
        return (
          <Fragment>
            <Button color="danger" size="sm" onClick={() => this.toggle()}>
              Delete
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
                Do you really want to delete this attendee?
              </ModalHeader>
              <ModalBody>
                <h3>
                  {attendee.name}
                </h3>
              </ModalBody>
              <ModalFooter>
                <Button type="button" onClick={() => this.toggle()}>
                  Cancel
                </Button>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => this.deleteAttendee(attendee.pk)}
                >
                  Yes
                </Button>
              </ModalFooter>
            </Modal>
          </Fragment>
        );
      }
    }
)


export default ConfirmDeleteAttendeeModal;