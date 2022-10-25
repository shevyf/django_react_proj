import React, { Component } from "react";
import { Table } from "reactstrap";
import NewAttendeeModal from "./NewAttendeeModal";
import { inject, observer } from "mobx-react";

import ConfirmDeleteAttendeeModal from "./ConfirmDeleteAttendeeModal";

var AttendeeList = inject('store')(
      observer(
        class AttendeeList extends Component {
              render() {
                const { attendees }= this.props.store;
                return (
                  <Table dark>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Email</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {!attendees || attendees.length <= 0 ? (
                        <tr>
                          <td colSpan="6" align="center">
                            <b>Oops, no attendees yet</b>
                          </td>
                        </tr>
                      ) : (
                        attendees.map(attendee => (
                          <tr key={attendee.pk}>
                            <td>{attendee.name}</td>
                            <td>{attendee.status}</td>
                            <td>{attendee.email}</td>
                            <td align="center">
                              <NewAttendeeModal
                                create={false}
                                attendee={attendee}
                                resetState={this.props.resetState}
                              />
                              &nbsp;&nbsp;
                              <ConfirmDeleteAttendeeModal
                                attendee={attendee}
                                resetState={this.props.resetState}
                              />
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </Table>
                );
              }
            }
      )
)

export default AttendeeList;