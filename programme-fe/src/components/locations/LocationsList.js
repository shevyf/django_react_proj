import React, { Component } from "react";
import { Table } from "reactstrap";
import NewLocationModal from "./NewLocationModal";
import { inject, observer } from "mobx-react";

import ConfirmDeleteLocationModal from "./ConfirmDeleteLocationModal";

var LocationList = inject('store')(
      observer(
        class LocationList extends Component {
              render() {
                const { locations }= this.props.store;
                return (
                  <Table dark>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {!locations || locations.length <= 0 ? (
                        <tr>
                          <td colSpan="6" align="center">
                            <b>Oops, no locations yet</b>
                          </td>
                        </tr>
                      ) : (
                        locations.map(location => (
                          <tr key={location.pk}>
                            <td>{location.name}</td>
                            <td>{location.description}</td>
                            <td align="center">
                              <NewLocationModal
                                create={false}
                                location={location}
                                resetState={this.props.resetState}
                              />
                              &nbsp;&nbsp;
                              <ConfirmDeleteLocationModal
                                location={location}
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

export default LocationList;