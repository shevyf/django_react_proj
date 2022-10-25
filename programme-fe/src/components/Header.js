import React, { Component } from "react";

import logo from '../logo.svg';

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src={logo}
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt=""
        />
        <h1>PixieCon 2023</h1>
      </div>
    );
  }
}

export default Header;