import React, { useState } from 'react'
import Dropdown from './Dropdown'
import { Button, Container, Navbar } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'
import LogoutModal from './LogoutModal'

const Header = ({ setUser, user }) => {
  const { setSearchValue, searchValue } = useTodoList()

  const [openLogoutModal, setOpenLogoutModal] = useState(false)

  return (
    <>
      <Navbar
        style={{
          backgroundColor: '#3c2b42',
          border: '1px solid #000',
        }}
        expand='xs'
      >
        <Container fluid>
          <Navbar.Brand href='#'>
            <h2
              style={{
                color: 'rgb(219, 202, 227)',
              }}
            >
              {user.name}'s Todo App
            </h2>
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
              className='w-100 mt-2'
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
          setUser={setUser}
          setOpenModal={setOpenLogoutModal}
        />
      )}
    </>
  )
}

export default Header
