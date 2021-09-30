import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { URL } from './Input'

const DeleteModal = ({
  id,
  setOpenModal,
  openModal,
  todoList,
  setTodoList,
}) => {
  console.log({ id })

  const handleDelete = async (deleteId) => {
    try {
      await fetch(`${URL}/${deleteId}`, { method: 'DELETE' })
      setTodoList(todoList.filter((todo) => todo.todo_id !== deleteId))
      setOpenModal(false)

      console.log(`${URL}/${deleteId}`)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Delete Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>Do you want to delete {id}?</Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={() => handleDelete(id)}>
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
