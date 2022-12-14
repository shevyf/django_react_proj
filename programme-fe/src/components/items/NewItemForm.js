import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import { inject, observer } from "mobx-react";

import axios from "axios";

import { ITEMS_API_URL } from "../../constants";

var NewItemForm = inject("store")(
    observer(
        class NewItemForm extends React.Component {
          state = {
            pk: 0,
            title: "",
            description: "",
            moderator: null,
            location: null,
            time: null
          };

          componentDidMount() {
            if (this.props.item) {
              const { pk, title, description, moderator, location, time } = this.props.item;
              console.log(moderator);
              this.setState({ pk, title, description, time });
              this.setState({ 'moderator': (!moderator ? null : moderator.pk), "location": (!location ? null : location.pk) })
            }
          }

          onChange = e => {
              this.setState({ [e.target.name]: e.target.value });
          };

          createItem = e => {
            console.log(e);
            console.log(this.state);
            e.preventDefault();
            axios.post(ITEMS_API_URL, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          editItem = e => {
            e.preventDefault();
            axios.put(ITEMS_API_URL + this.state.pk, this.state).then(() => {
              this.props.resetState();
              this.props.toggle();
            });
          };

          defaultIfEmpty = value => {
            return value === "" ? "" : value;
          };

          render() {
            return (
              <Form onSubmit={this.props.item ? this.editItem : this.createItem}>
                <FormGroup>
                  <Label for="title">Title:</Label>
                  <Input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.title)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="location">Location:</Label>
                  <Input
                    type="select"
                    name="location"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.location)}
                  >
                    <option value="">Select a location</option>
                    {!this.props.store.locations ? (
                      <option>No locations available</option>
                    ) : (
                      this.props.store.locations.map(location => (
                        <option value={location.pk}>{location.name}</option>
                      ))
                    )
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="time">Time:</Label>
                  <Input
                    type="time"
                    name="time"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.time)}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="moderator">Moderator:</Label>
                  <Input
                    type="select"
                    name="moderator"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.moderator)}
                  >
                    <option value="">Select a moderator</option>
                  {!this.props.store.attendees ? (
                      <option value="0">No attendees available</option>
                    ) : (
                      this.props.store.attendees.map(attendee => (
                        <option value={attendee.pk}>{attendee.name}</option>
                      ))
                    )
                    }
                  </Input>
                </FormGroup>
                <FormGroup>
                  <Label for="description">Description:</Label>
                  <Input
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={this.defaultIfEmpty(this.state.description)}
                  />
                </FormGroup>
                <Button>Send</Button>
              </Form>
            );
          }
        }
    )
)


export default NewItemForm;