import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Navbar, Nav, formControl, Button, form} from 'react-bootstrap';
import Hotellista from './Hotellista.js';
import Welcome from './startsida.js';
import { Link } from 'react-router-dom';

function navBar() {
  return (
    <>
      <Navbar bg="none" data-bs-theme="dark" className="navbar">
        <Container>
          <Navbar.Brand as={Link} to="/startsida">
            <img
              src="/img/logga2.png"
              width="100"
              height="100"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
          <Nav className="justify-content-end p-3 fs-4">
            <Nav.Link as={Link} to="/Hotellista">Alla Hotell</Nav.Link>
            <Nav.Link as={Link} to="/Hotellista">Familjhotell</Nav.Link>
            <Nav.Link href="#pricing">Vuxenhotell</Nav.Link>
            <Nav.Link href="#pricing">Kontakta Oss</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navBar;
