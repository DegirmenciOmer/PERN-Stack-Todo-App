import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { URL } from '../contexts/AllTodosContext'

const EditModal = ({ activeTodo, setOpenModal, openModal }) => {
  const [description, setDescription] = useState(activeTodo.description)

  const handleEdit = async (e) => {
    e.preventDefault()
    try {
      const body = { description }

      await fetch(`${URL}/${activeTodo.todo_id}`, {
        method: 'PUT',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      setOpenModal(false)

      window.location = '/'
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal closeModal show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => handleEdit(e)}>
        <Modal.Body>
          <Form.Control
            value={description}
            type='text'
            placeholder='Enter a new todo'
            onChange={(e) => setDescription(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button type='submit'>Save</Button>
          <Button variant='secondary' onClick={() => setOpenModal(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default EditModal
