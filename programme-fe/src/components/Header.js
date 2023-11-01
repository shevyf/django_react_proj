import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { Nav, Navbar, NavbarBrand, NavLink } from 'reactstrap';

import logo from '../logo.svg';

class Header extends Component {
  wrappedMark = newrelic.interaction().save().createTracer('wrappedMarkTracer', this.mark);

  mark() {
	  console.log('first mark');
	  console.log(newrelic.info);
    if (typeof newrelic !== 'undefined'){ newrelic.interaction().save()}
  }

  setAttribute() {
    setTimeout(() => {
      if (typeof newrelic !== 'undefined') {
        console.log('samophlange happening');
	newrelic.setCustomAttribute('samophlange','true');
      } else {
        setAttribute()
      }
    }, 100)
  }

  componentDidMount() {
    this.setAttribute()
  }

  render() {
    return (
      <div className="text-center">
        <div>
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">
              <div style={{ display: "flex" }}>
                <img
                  src={logo}
                  width="70px"
                  className="img-thumbnail"
                  alt=""
                  style={{ verticalAlign: "bottom" }}
                />
                <h1 style={{ verticalAlign: "middle" }}>PixieCon 2023</h1>
              </div>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavLink tag={Link} to="/programme">Programme</NavLink>
              <NavLink tag={Link} to="/attendees" onClick={this.wrappedMark}>Attendees</NavLink>
              <NavLink tag={Link} to="/locations">Locations</NavLink>
	      <NavLink tag={Link} to="/iframetest">Iframe Test</NavLink>
	      <NavLink tag={Link} to="/videotest">Video Test</NavLink>
            </Nav>
          </Navbar>
        </div>
      </div>
    );
  }
}

export default Header;
