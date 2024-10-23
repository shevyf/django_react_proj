import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { inject, observer } from "mobx-react";

import axios from "axios";

import { ATTENDEES_API_URL } from "../../constants";

var NewAttendeeForm = inject("store")(
    observer(
        class NewAttendeeForm extends React.Component {
          state = {
            pk: 0,
            name: "",
            status: "",
            email: "",
          };

          componentDidMount() {
            if (this.props.attendee) {
              const { pk, name, status, email } = this.props.attendee;
              this.setState({ pk, name, status, email });
            }
          }

          onChange = e => {
              this.setState({ [e.target.name]: e.target.value });
          };

	  createAttendee = e => {
		  console.log("new attendee start");
		  newrelic.interaction()
		    .setName("saveNewAttendee" + this.state.email)
		    .save()
		    .createTracer("saveNewAttendeeTracer", this.createAttendeeCallback(e))
	  }

          createAttendeeCallback = e => {
	    console.log("new attendee callback start");
            e.preventDefault();
            axios.post(ATTENDEES_API_URL, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          editAttendee = e => {
            e.preventDefault();
            axios.put(ATTENDEES_API_URL + this.state.pk, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          defaultIfEmpty = value => {
            return value === "" ? "" : value;
          };

          render() {
            return (
              <Form onSubmit={this.props.attendee ? this.editAttendee : this.createAttendee}>
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
                  <Label for="email">Email:</Label>
                  <Input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.email)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="status">Status:</Label>
                  <Input
                    type="text"
                    name="status"
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


export default NewAttendeeForm;
