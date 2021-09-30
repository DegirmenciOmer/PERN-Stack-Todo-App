import { useEffect, useRef, useState } from 'react'
import { ListGroup, Button, ButtonGroup, Modal } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import DeleteModal from './DeleteModal'
import { URL } from './Input'

const ListTodos = () => {
  const [todoList, setTodoList] = useState([])
  const [openModal, setOpenModal] = useState(false, null)

  const fetchTodos = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setTodoList(data)
    } catch (err) {
      console.error(err.message)
    }
  }

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

  useEffect(() => {
    fetchTodos()
  }, [todoList])

  return (
    <>
      <h1 className='text-center mt-5'>Todo List</h1>
      <div>
        <ListGroup>
          {todoList.length === 0 ? (
            <p>No todos</p>
          ) : (
            todoList.map((todo) => (
              <ListGroup.Item
                className='d-flex justify-content-between'
                key={todo.todo_id}
              >
                <span>
                  {todo.todo_id}-{todo.description}
                </span>
                <ButtonGroup>
                  <Button onClick={() => console.log(todo.todo_id)}>
                    Edit
                  </Button>
                  <Button onClick={() => setOpenModal(true)} variant='danger'>
                    Delete {todo.todo_id}
                  </Button>
                </ButtonGroup>

                <Modal show={openModal} onHide={() => setOpenModal(false)}>
                  <Modal.Header>
                    <Modal.Title>Delete Todo</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Do you want to delete {todo.todo_id}?</Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant='danger'
                      onClick={() => handleDelete(todo.todo_id)}
                    >
                      Delete
                    </Button>
                    <Button
                      variant='secondary'
                      onClick={() => setOpenModal(false)}
                    >
                      Cancel
                    </Button>
                  </Modal.Footer>
                </Modal>

                {/* {openModal && (
                  <DeleteModal
                    id={todo.todo_id}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                )} */}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </>
  )
}

export default ListTodos
