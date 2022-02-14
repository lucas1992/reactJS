import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from './CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';


function NavBar() {
  const test = useContext(CartContext);
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="/ecommerce_logo.png" className="logo" alt="logo ecommerce"/>
            <NavLink to={"/"} className="category brand-link">Ecommerce Etcheverry</NavLink>
            <Nav className="me-auto">
              <NavLink to={"/category/all"} className="category nav-link">Todos</NavLink>
              <NavLink to={"/category/not-alcohol"} className="category nav-link">Sin alcohol</NavLink>
              <NavLink to={"/category/alcohol"} className="category nav-link">Con alcohol</NavLink>
            </Nav>
            <Nav className="justify-content-end">
              <NavLink to={"/category/register"} className="category nav-link">Registrarse</NavLink>
              <NavLink to={"/category/login"} className="category nav-link">Ingresar</NavLink>
              <div className="cart">
                <NavLink to={"/cart"} className="category">
                    <CartWidget className="cart" quantity={test.count.toString()}/>
                </NavLink>
              </div>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;

