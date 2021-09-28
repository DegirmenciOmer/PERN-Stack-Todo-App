import { useEffect, useRef, useState } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import DeleteModal from './DeleteModal'
import { URL } from './Input'

const ListTodos = () => {
  const [todoList, setTodoList] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const fetchTodos = async () => {
    try {
      const response = await fetch(URL)
      const data = await response.json()
      setTodoList(data)
    } catch (err) {
      console.error(err.message)
    }
  }
  useEffect(() => {
    fetchTodos()
  }, [])

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
                <span>{todo.description}</span>
                <ButtonGroup>
                  <Button onClick={() => console.log(todo.todo_id)}>
                    Edit
                  </Button>
                  <Button onClick={() => setOpenModal(true)} variant='danger'>
                    Delete
                  </Button>
                </ButtonGroup>
                {openModal && (
                  <DeleteModal
                    id={todo.todo_id}
                    setOpenModal={setOpenModal}
                    openModal={openModal}
                    todoList={todoList}
                    setTodoList={setTodoList}
                  />
                )}
              </ListGroup.Item>
            ))
          )}
        </ListGroup>
      </div>
    </>
  )
}

export default ListTodos
