import React, { Component } from "react";
import { Navbar, Container, Nav,NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class NavigationBar extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Artox
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Articles
              </Nav.Link>
              <Nav.Link as={Link} to="/topicnews">
                Add Article{" "}
              </Nav.Link>
            </Nav>
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <NavDropdown title="Profile" id="navbarScrollingDropdown">
                  <NavDropdown.Item as={Link} to="/profile">My Profile</NavDropdown.Item>
                  <NavDropdown.Item>Change Password</NavDropdown.Item>
                  <NavDropdown.Item>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
