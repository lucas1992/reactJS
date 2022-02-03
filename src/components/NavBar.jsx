import { Navbar, Nav, Container } from 'react-bootstrap';
import './NavBar.css';
import CartWidget from './CartWidget';

function NavBar() {
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
            <img src="/ecommerce_logo.png" className="logo" alt="logo ecommerce"/>
            <Navbar.Brand href="#home">Ecommerce Etcheverry</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="# ">Home</Nav.Link>
              <Nav.Link href="#tecnology">Tecnologia</Nav.Link>
              <Nav.Link href="#dress">Indumentaria</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="#register">Registrarse</Nav.Link>
              <Nav.Link href="#login">Ingresar</Nav.Link>
              <div className="cart">
                    <CartWidget className="cart" />
              </div>
            </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;

