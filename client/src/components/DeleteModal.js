import React from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import { URL } from '../utils'

const DeleteModal = ({ activeTodo, setOpenModal, openModal }) => {
  const { todoList, setTodoList } = useTodoList()

  const handleDelete = async (deleteId) => {
    try {
      await fetch(`${URL}/todos/${deleteId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      })
      setTodoList(todoList.filter((todo) => todo.todo_id !== deleteId))
      setOpenModal(false)
    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Modal centered show={openModal} onHide={() => setOpenModal(false)}>
      <Modal.Header>
        <Modal.Title>Delete Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Do you want to delete "{activeTodo.description}" ?
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='danger'
          onClick={() => handleDelete(activeTodo.todo_id)}
        >
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
