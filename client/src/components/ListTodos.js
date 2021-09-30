import { useEffect, useState } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { URL, useTodoList } from '../contexts/AllTodosContext'
import DeleteModal from './DeleteModal'

const ListTodos = () => {
  const { todoList, setTodoList } = useTodoList()
  const [openModal, setOpenModal] = useState(false)
  const [activeTodo, setActiveTodo] = useState()

  const handleShow = (e) => {
    setActiveTodo(e)
    setOpenModal(true)
  }

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
            <>
              {todoList
                .slice(0)
                .reverse()
                .map((todo) => (
                  <ListGroup.Item
                    className='d-flex justify-content-between'
                    key={todo.todo_id}
                  >
                    <span>{todo.description}</span>
                    <ButtonGroup>
                      <Button onClick={() => console.log(todo.todo_id)}>
                        Edit
                      </Button>
                      <Button onClick={() => handleShow(todo)} variant='danger'>
                        Delete
                      </Button>
                    </ButtonGroup>
                  </ListGroup.Item>
                ))}
              {openModal && (
                <DeleteModal
                  activeTodo={activeTodo}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              )}
            </>
          )}
        </ListGroup>
      </div>
    </>
  )
}

export default ListTodos
