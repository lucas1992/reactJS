import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import React, { Component } from 'react';
import './NavBar.css';

function NavBar() {
  return <>
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="/ecommerce_logo.png" className="logo" />
            <Navbar.Brand href="#home">Ecommerce Etcheverry</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tecnology">Tecnologia</Nav.Link>
              <Nav.Link href="#dress">Indumentaria</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
  </>;
}

export default NavBar;

