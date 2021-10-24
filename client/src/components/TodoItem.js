import React, { useState } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { toggleTodo } from '../utils'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const TodoItem = ({ todo }) => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [activeTodo, setActiveTodo] = useState()
  const [showOnHover, setShowOnHover] = useState(false)

  const handleDeleteShow = (e) => {
    setActiveTodo(e)
    setOpenDeleteModal(true)
  }

  const handleToggle = (toggleId) => {
    toggleTodo(toggleId)
    window.location = '/home'
  }

  const handleEditShow = (e) => {
    setActiveTodo(e)
    setOpenEditModal(true)
  }

  const responsiveBtnDisplay = {
    display: `${
      showOnHover || window.innerWidth < 768 ? 'inline-block' : 'none'
    } `,
  }

  return (
    <>
      <ListGroup.Item
        className='todo-item mh-100 rounded px-2'
        key={todo.todo_id}
        onMouseOverCapture={() => setShowOnHover(true)}
        onMouseLeave={() => setShowOnHover(false)}
      >
        <ButtonGroup className='d-flex'>
          <span
            onClick={() => handleToggle(todo.todo_id)}
            className='w-100'
            style={{
              textDecorationLine: `${todo.is_done ? 'line-through' : 'none'} `,
              color: `${todo.is_done ? 'gray' : '#000'} `,
            }}
          >
            <input
              id={todo.todo_id}
              type='radio'
              onChange={() => {}}
              checked={todo.is_done}
              style={{
                marginRight: '5px',
              }}
            />
            {todo.description}
          </span>
          <Button
            style={responsiveBtnDisplay}
            variant='outline-secondary'
            className='but border-0 p-1'
            onClick={() => handleEditShow(todo)}
          >
            <i className='fa fa-edit'></i>
          </Button>
          <Button
            style={responsiveBtnDisplay}
            className='but border-0 p-1'
            onClick={() => handleDeleteShow(todo)}
            variant='outline-danger'
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
