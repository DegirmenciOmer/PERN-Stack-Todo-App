import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'
import LogoutModal from './LogoutModal'

const Header = ({ setId }) => {
  const { setSearchValue, searchValue } = useTodoList()

  const [openLogoutModal, setOpenLogoutModal] = useState(false)

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
            className='justify-content-end mt-2'
            id='basic-navbar-nav'
          >
            <div>
              <Dropdown
                prompt='Search...'
                onChange={(val) => setSearchValue(val)}
              />
            </div>
            <Button
              className={window.innerWidth < 992 ? 'w-100 mt-2' : ''}
              variant='outline-danger'
              onClick={setOpenLogoutModal}
            >
              Logout
            </Button>
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
      {openLogoutModal && (
        <LogoutModal
          openModal={openLogoutModal}
          setId={setId}
          setOpenModal={setOpenLogoutModal}
        />
      )}
    </>
  )
}

export default Header
