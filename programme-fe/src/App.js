import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ItemsHome from "./components/ItemsHome";
import { inject, observer } from "mobx-react";


var App = inject("store")(
    class App extends Component {
      componentDidMount() {
        this.props.store.loadLocations();
        this.props.store.loadAttendees();
      }

      render() {
        return (
          <Fragment>
            <Header />
            <ItemsHome />
          </Fragment>
        );
      }
    }
)


export default App;