import React from "react";
import { Link } from "react-router-dom";

import logoLightBlue from "../../assets/logo/logo-light-blue.png";

import styles from "./Navbar.module.css";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";
import { useAuth } from "../../contexts/auth";

function NavBar() {
  const { logout, signed } = useAuth();

  return (
    <Navbar className={styles.navbar_main} variant="dark" expand="lg">
      <Navbar.Brand href="/">
        <img
          alt="Logo"
          src={logoLightBlue}
          width="30"
          height="30"
          className={styles.nav_brand_logo}
        />
        MTV
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Link className={styles.nav_link} to="/">
            Home
          </Link>
          <Link className={styles.nav_link} to="/admin/phrases">
            Phrases
          </Link>
          <Link className={styles.nav_link} to="/admin/users">
            Users
          </Link>
          {signed && (
            <Button
              onClick={logout}
              className={styles.log_button}
              variant="dark"
            >
              Logout
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
