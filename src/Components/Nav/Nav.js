import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
//My component link with nav
import HeaderLink from "./HeaderLink";

import logo from "../../images/logo.png";
import search from "../../images/search-icon.png";
import cart from "../../images/cart.png";

class Navigation extends Component {
  render() {
    return (
      <div>
        <div className="nav-wrapper fixed-top navbar navbar-toggleable-sm navbar-expand-md">
          <div className="container">
            <Navbar
              className="w-100"
              collapseOnSelect
              expand="lg"
              variant="dark"
            >
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Brand href="/">
                <img width="18px" src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="nav-justified w-100 nav-fill">
                  <Nav.Link className="nav-link" href="/mac">
                    Mac
                  </Nav.Link>
                  <Nav.Link href="/iphone">iphone</Nav.Link>
                  <Nav.Link href="/ipad">ipad</Nav.Link>
                  <Nav.Link href="/watch">watch</Nav.Link>
                  <Nav.Link href="/tv">tv</Nav.Link>
                  <Nav.Link href="/music">Music</Nav.Link>
                  <Nav.Link href="/support">Support</Nav.Link>
                  <Nav.Link href="/search">
                    <img width="18px" src={search} alt="" />
                  </Nav.Link>
                  <Nav.Link href="/cart">
                    <img width="18px" src={cart} alt="" />
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}
export default Navigation;
