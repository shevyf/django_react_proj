import React, { Component, Fragment } from "react";
import { Modal, ModalHeader, ModalBody, Button, ModalFooter } from "reactstrap";
import { inject } from "mobx-react";


var ConfirmDeleteLocationModal = inject('store')(
    class ConfirmDeleteLocationModal extends Component {
      state = {
        modal: false
      };

      toggle = () => {
        this.setState(previous => ({
          modal: !previous.modal
        }));
      };

      deleteLocation = pk => {
        this.props.store.deleteLocation(pk);
        this.toggle();
      };

      render() {
        const { location } = this.props;
        return (
          <Fragment>
            <Button color="danger" size="sm" onClick={() => this.toggle()}>
              Delete
            </Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle}>
              <ModalHeader toggle={this.toggle}>
                Do you really want to delete this location?
              </ModalHeader>
              <ModalBody>
                <h3>
                  {location.name}
                </h3>
              </ModalBody>
              <ModalFooter>
                <Button type="button" onClick={() => this.toggle()}>
                  Cancel
                </Button>
                <Button
                  type="button"
                  color="primary"
                  onClick={() => this.deleteLocation(location.pk)}
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


export default ConfirmDeleteLocationModal;