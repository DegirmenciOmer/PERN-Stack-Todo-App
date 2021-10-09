import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { editTodo } from './../utils/index'

const EditModal = ({ activeTodo, setOpenModal, openModal }) => {
  const [description, setDescription] = useState(activeTodo.description)

  const handleEdit = (e) => {
    e.preventDefault()
    editTodo(description, activeTodo.todo_id)
    setOpenModal(false)
  }
  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
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
