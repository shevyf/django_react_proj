import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { inject, observer } from "mobx-react";

import axios from "axios";

import { LOCATIONS_API_URL } from "../../constants";

var NewLocationForm = inject("store")(
    observer(
        class NewLocationForm extends React.Component {
          state = {
            pk: 0,
            name: "",
            description: "",
          };

          componentDidMount() {
            if (this.props.location) {
              const { pk, name, status, email } = this.props.location;
              this.setState({ pk, name, status, email });
            }
          }

          onChange = e => {
              this.setState({ [e.target.name]: e.target.value });
          };

          createLocation = e => {
            e.preventDefault();
            axios.post(LOCATIONS_API_URL, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          editLocation = e => {
            e.preventDefault();
            axios.put(LOCATIONS_API_URL + this.state.pk, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          defaultIfEmpty = value => {
            return value === "" ? "" : value;
          };

          render() {
            return (
              <Form onSubmit={this.props.location ? this.editLocation : this.createLocation}>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.name)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description:</Label>
                  <Input
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.status)}
                  />
                </FormGroup>
                <Button>Send</Button>
              </Form>
            );
          }
        }
    )
)


export default NewLocationForm;