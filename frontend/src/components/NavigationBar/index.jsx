import React from "react";

import { Nav, Navbar, Container, NavDropdown, Form } from "react-bootstrap";
import styled from "styled-components";
import { main, neutral } from "../../utils";
import { Link } from "react-router-dom";
const StyledNav = styled(Navbar)`
  background-color: ${neutral[200]};
  #nav-title,
  i {
    color: ${main[100]} !important;
  }
  a {
    color: ${neutral[200]};
  }
`;

export const NavigationBar = () => {
  return (
    <StyledNav expand="lg">
      <Container>
        <Navbar.Brand id="nav-title" href="/">
          Simulación
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <i className="fas fa-ellipsis-h"></i>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link eventKey="1" to="/" as={Link}>
              Inicio
            </Nav.Link>
            <Nav.Link eventKey="2" to="/exercises/generator/" as={Link}>
              Generador
            </Nav.Link>
            <Nav.Link eventKey="2" to="/exercises/tests/smirnov" as={Link}>
              Smirnov
            </Nav.Link>
            <Nav.Link eventKey="2" to="/exercises/tests/frequency" as={Link}>
              Frecuencia
            </Nav.Link>
          </Nav>
          {/* <Nav className="mr-auto">
            <span style={{ marginRight: "12px" }}>Modo oscuro</span>
            <Form.Check type="switch" id="custom-switch" />
          </Nav> */}
        </Navbar.Collapse>
      </Container>
    </StyledNav>
  );
};
export default NavigationBar;
