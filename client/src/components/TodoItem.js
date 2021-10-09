import React, { useState } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { toggleTodo } from '../utils'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const TodoItem = ({ todo }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [activeTodo, setActiveTodo] = useState()

  const handleDeleteShow = (e) => {
    setActiveTodo(e)
    setOpenDeleteModal(true)
  }

  const handleToggle = (toggleId) => {
    toggleTodo(toggleId)
    window.location = '/'
  }

  const handleEditShow = (e) => {
    setActiveTodo(e)
    setOpenEditModal(true)
  }

  return (
    <>
      <ListGroup.Item
        className='d-flex justify-content-between'
        key={todo.todo_id}
      >
        <p
          onClick={() => handleToggle(todo.todo_id)}
          style={{
            marginBottom: '0',
            paddingBottom: '0',
            width: '100%',
            textDecorationLine: `${todo.is_done ? 'line-through' : 'none'} `,
          }}
        >
          {todo.description}
        </p>
        <ButtonGroup>
          <Button className='but' onClick={() => handleEditShow(todo)}>
            <i className='fa fa-edit'></i>
          </Button>
          <Button
            className='but'
            onClick={() => handleDeleteShow(todo)}
            variant='danger'
          >
            <i className='fa fa-trash'></i>
          </Button>
        </ButtonGroup>
      </ListGroup.Item>
      {openDeleteModal && (
        <DeleteModal
          activeTodo={activeTodo}
          openModal={openDeleteModal}
          setOpenModal={setOpenDeleteModal}
        />
      )}
      {openEditModal && (
        <EditModal
          activeTodo={activeTodo}
          openModal={openEditModal}
          setOpenModal={setOpenEditModal}
        />
      )}
    </>
  )
}

export default TodoItem
