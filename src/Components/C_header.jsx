import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{
        padding: "15px 0",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        
       
        zIndex: 9999,
        background: "#fff",
        boxShadow: "0 0 8px 0px rgba(0, 0, 0, 0.1)",
        transition: "all 0.5s linear",
        
      }}
    >
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            color: "#f64b4b",
            textTransform: "uppercase",
            fontWeight: 700,
            letterSpacing: "2px",
            display: "inline-block",
            height: "auto",
            padding: 0,
            fontSize: "22px",
            lineHeight: 1.6,
            textDecoration: "none",
          }}
        >
          Corporate
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link href="#services" className="nav-link">
              Services
            </Nav.Link>
            <Nav.Link href="#works" className="nav-link">
              Works
            </Nav.Link>
            <Nav.Link href="#teams" className="nav-link">
              Teams
            </Nav.Link>
            <Nav.Link href="#blog" className="nav-link">
              Blog
            </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
