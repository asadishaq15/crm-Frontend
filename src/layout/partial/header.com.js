import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import Logo from "../../assets/img/logo.jpg"
const Header = () => {
  return (
  <Navbar
  collapseOnSelect
  bg='info'
  variant='dark'
  expand="md"
  >
    <Navbar.Brand>
    <img src={Logo} alt='Logo' width="50px"></img>
    </Navbar.Brand>
    <Navbar.Toggle
    aria-controls='basic-navbar-nav'/>
    <Navbar.Collapse id='basic-navbar-nav'>

        <Nav className="navbar-nav ms-auto">
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/tickets'>Tickets</Nav.Link>
            <Nav.Link href='/logout'>Logout</Nav.Link>
        </Nav>
    </Navbar.Collapse>
  </Navbar>
  )
}

export default Header
