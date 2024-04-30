import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer, linkContainer} from 'react-router-bootstrap'
import React from 'react'
import logo from '../Images/logo.png'
 const Header = () => {
  return (
    <header>
        <Navbar className="custom-navbar" bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
        <Navbar.Brand >
        <img src={logo} alt="Logo" />
          OverClocked
          </Navbar.Brand>
          </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
            <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart/> Cart
                  </Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser/> Sign In
                  </Nav.Link>
                  </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </header>
  )
}
export default Header;