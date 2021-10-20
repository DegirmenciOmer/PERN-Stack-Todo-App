import React from 'react'
import Dropdown from './Dropdown'
import { Container, Navbar } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'

const Header = () => {
  const { setSearchValue, searchValue } = useTodoList()

  return (
    <>
      <Navbar
        style={{ backgroundColor: 'rgb(140, 196, 255)' }}
        expand='lg'
        className='rounded'
      >
        <Container fluid>
          <Navbar.Brand href='#'>
            <h2>Todo App</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse
            className='justify-content-end'
            id='basic-navbar-nav'
          >
            <div>
              {' '}
              <Dropdown
                prompt='Search...'
                onChange={(val) => setSearchValue(val)}
              />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {searchValue && (
        <div className='mt-5 mb-3'>
          <h6>Selected Todo:</h6>

          <TodoItem todo={searchValue} />
          <hr />
        </div>
      )}
    </>
  )
}

export default Header
