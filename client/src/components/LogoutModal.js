import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

const LogoutModal = ({ setOpenModal, openModal, setId }) => {
  const history = useHistory()

  const logout = () => {
    setId(null)
    setOpenModal(false)
    history.push('/login')
  }

  return (
    <Modal centered show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Logout</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={logout}>
          Logout
        </Button>
        <Button variant='secondary' onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LogoutModal
