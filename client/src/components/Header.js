import React, { useState } from 'react'
import Input from './Input'
import Dropdown from './Dropdown'
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from 'react-bootstrap'

const Header = () => {
  const [value, setValue] = useState(null)
  return (
    <Navbar bg='light' expand='lg'>
      <Container fluid>
        <Navbar.Brand href='#'>Pern Todo App</Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: '100px' }}
            navbarScroll
          ></Nav>
          <Input />
          <Dropdown
            prompt='Search...'
            setValue={setValue}
            onChange={(val) => setValue(val)}
            value={value}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
