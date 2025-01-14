import { Badge, Container, Nav, Navbar } from "react-bootstrap";
import styles from "./styles.module.css";
import { HeaderBasket } from "../../ecommerce";
import { NavLink } from "react-router-dom";
const {headerContainer,headerLogo}=styles;
export default function Header() {
  return (
    <header>
      <div className={headerContainer}>
        <h1 className={headerLogo}>
          <span>E-Commerce </span> <Badge bg="info"> Beta</Badge>
        </h1>
        <HeaderBasket/>
      </div>
      <Navbar
       expand="lg"
        className="bg-body-tertiary"
        bg="dark"
        data-bs-theme="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About us</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  );
}
