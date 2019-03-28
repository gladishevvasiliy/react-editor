import * as React from 'react'
import { NavLink } from 'react-router-dom'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">База знамен</Navbar.Brand>
    <Nav className="mr-auto">
      <NavLink className="nav-link" to="/">
        Знамена
      </NavLink>
      <NavLink className="nav-link" to="/compositions">
        Попевки
      </NavLink>
    </Nav>
  </Navbar>
)
export default Header
