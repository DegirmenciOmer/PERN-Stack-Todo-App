import React, { useRef } from 'react'
import { Button, Modal } from 'react-bootstrap'

const DeleteModal = ({ id, setOpenModal, openModal }) => {
  function handleDelete(e) {
    console.log(`'delete' ${id}`)
  }
  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Delete Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure?</Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={handleDelete(id)}>
          Delete
        </Button>
        <Button variant='secondary' onClick={() => setOpenModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal
