import { Navbar as BSNavbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navbar = () => (
  <BSNavbar bg="light" expand="lg">
    <Container>
      <Link to="/" className="navbar-brand">
        Home Page
      </Link>
      <BSNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BSNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link to="/" className="nav-link">
            About Me
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/portfolio" className="nav-link">
            Portfolio
          </Link>
          <Link to="/resume" className="nav-link">
            Resume
          </Link>
        </Nav>
      </BSNavbar.Collapse>
    </Container>
  </BSNavbar>
);

export default Navbar;
