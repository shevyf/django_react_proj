import React, { Component } from "react";
import { Table } from "reactstrap";
import NewItemModal from "./NewItemModal";
import { inject } from "mobx-react";

import ConfirmDeleteItemModal from "./ConfirmDeleteItemModal";

var ItemList = inject('store')(
    class ItemList extends Component {
      render() {
        const { items, store }= this.props;
        return (
          <Table dark>
            <thead>
              <tr>
                <th>Title</th>
                <th>Time</th>
                <th>Location</th>
                <th>Moderator</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!items || items.length <= 0 ? (
                <tr>
                  <td colSpan="6" align="center">
                    <b>Oops, no programme items yet</b>
                  </td>
                </tr>
              ) : (
                items.map(item => (
                  <tr key={item.pk}>
                    <td>{item.title}</td>
                    <td>{item.time}</td>
                    <td>{!item.location ? 'TBC' : item.location.name}</td>
                    <td>{!item.moderator ? 'TBC' : item.moderator.name}</td>
                    <td>{item.description}</td>
                    <td align="center">
                      <NewItemModal
                        create={false}
                        item={item}
                        resetState={this.props.resetState}
                      />
                      &nbsp;&nbsp;
                      <ConfirmDeleteItemModal
                        pk={item.pk}
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

export default ItemList;