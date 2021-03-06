import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from '../Cart/CartWidget';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Cart/CartContext';


function NavBar() {
  const cart = useContext(CartContext).cartList;
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="/reactJS/ecommerce_logo.png" className="logo" alt="logo ecommerce"/>
            <NavLink to={"/"} className="category brand-link">Ecommerce Etcheverry</NavLink>
            <Nav className="me-auto">
              <NavLink to={"/category/0"} className="category nav-link">Todos</NavLink>
              <NavLink to={"/category/9"} className="category nav-link">Sin alcohol</NavLink>
              <NavLink to={"/category/1"} className="category nav-link">Vinos</NavLink>
              <NavLink to={"/category/5"} className="category nav-link">Licores</NavLink>
            </Nav>
            <Nav className="justify-content-end">
              <NavLink to={"/category/register"} className="category nav-link">Registrarse</NavLink>
              <NavLink to={"/category/login"} className="category nav-link">Ingresar</NavLink>
              <div className="cart">
                {
                    cart.length
                    ? <NavLink to={"/cart"} className="category">
                        <CartWidget className="cart"/>
                    </NavLink>
                    : ""
                }
              </div>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;

