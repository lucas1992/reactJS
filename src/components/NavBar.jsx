import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from './CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="/ecommerce_logo.png" className="logo" alt="logo ecommerce"/>
            <NavLink to={"/"} activeClassName="current-category" className="category"><Navbar.Brand href="#home">Ecommerce Etcheverry</Navbar.Brand></NavLink>
            <Nav className="me-auto">
              <NavLink to={"/category/all"} activeClassName="current-category" className="category"><Nav.Link href="#home">Todos</Nav.Link></NavLink>
              <NavLink to={"/category/not-alcohol"} activeClassName="current-category" className="category"><Nav.Link href="#alcohol">Sin alcohol</Nav.Link></NavLink>
              <NavLink to={"/category/alcohol"} activeClassName="current-category" className="category"><Nav.Link href="#no-alcohol">Con alcohol</Nav.Link></NavLink>
            </Nav>
            <Nav className="justify-content-end">
              <NavLink to={"/category/register"} activeClassName="current-category" className="category"><Nav.Link href="#register">Registrarse</Nav.Link></NavLink>
              <NavLink to={"/category/login"} activeClassName="current-category" className="category"><Nav.Link href="#login">Ingresar</Nav.Link></NavLink>
              <div className="cart">
                <NavLink to={"/cart"} activeClassName="current-category" className="category">
                    <CartWidget className="cart" />
                </NavLink>
              </div>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;

