import { useState } from 'react'
import { Row, Col, ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import DeleteModal from './DeleteModal'

const ListTodos = () => {
  const { todoList } = useTodoList()
  const [openModal, setOpenModal] = useState(false)

  return (
    <>
      <h1 className='text-center mt-5'>Todo List</h1>
      <Row>
        <ListGroup>
          {todoList.length === 0 ? (
            <p>No todos</p>
          ) : (
            todoList.map((todo) => (
              <ListGroup.Item
                className='d-flex justify-content-between'
                key={todo.todo_id}
              >
                <span>{todo.description}</span>
                <ButtonGroup>
                  <Button>Edit</Button>
                  <Button onClick={() => setOpenModal(true)} variant='danger'>
                    Delete
                  </Button>
                </ButtonGroup>
                <DeleteModal
                  id={todo.todo_id}
                  setOpenModal={setOpenModal}
                  openModal={openModal}
                />
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </Row>
    </>
  )
}

export default ListTodos
