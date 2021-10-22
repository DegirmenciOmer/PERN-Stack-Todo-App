import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const LoginWarningModal = ({ setOpenModal, openModal }) => {
  return (
    <Modal centered show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>OOpss!</Modal.Title>
      </Modal.Header>
      <Modal.Body>Wrong Credentials!</Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setOpenModal(false)}>Got it</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default LoginWarningModal
