import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { editTodo } from './../utils/index'

const EditModal = ({ activeTodo, setOpenModal, openModal }) => {
  const [description, setDescription] = useState(activeTodo.description)

  const handleEdit = (e) => {
    e.preventDefault()
    if (description.length < 4) {
      return alert('Input value must be minimum 3 characters!')
    } else {
      editTodo(description, activeTodo.todo_id)
      setOpenModal(false)
    }
  }

  const handleEditInput = (e) => {
    e.preventDefault()
    const { value, maxLength } = e.target
    const limitedValue = value.slice(0, maxLength)

    setDescription(limitedValue)
  }
  return (
    <Modal centered show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Form onSubmit={(e) => handleEdit(e)}>
        <Modal.Body>
          <Form.Control
            maxLength='30'
            value={description}
            type='text'
            onChange={(e) => handleEditInput(e)}
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
