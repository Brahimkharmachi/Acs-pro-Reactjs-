import React from "react";
import "./headers.css";
import { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

function ColorSchemesExample() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      bg="white"
      className={`sticky-lg-top ${isSticky ? "sticky" : ""}`}
    >
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="./acs-pro.webp" alt="acs pro" width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavDropdown" />
        <Navbar.Collapse
          id="navbarNavDropdown"
          className="justify-content-center"
        >
          <Nav
            className="me-auto"
            style={{
              color: "#13243F",
              gap: "55px",
              fontSize: "18px",
              fontFamily: "'Marcellus SC', 'sans-serif'",
            }}
          >
            <Nav.Link href="/">ACCUEIL</Nav.Link>
            <Nav.Link href="/entreprise">L'ENTREPRISE</Nav.Link>
            <NavDropdown title="NOS OFFRES" id="basic-nav-dropdown">
              <NavDropdown.Item href="/conseil-et-conception">
                CONSEIL ET CONCEPTION
              </NavDropdown.Item>
              <NavDropdown.Item href="/installation">
                L’INSTALLATION
              </NavDropdown.Item>
              <NavDropdown.Item href="/maintenance">
                LA MAINTENANCE
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;
