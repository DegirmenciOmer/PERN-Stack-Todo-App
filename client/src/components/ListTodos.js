import { useEffect, useState } from 'react'
import { ListGroup, Button, ButtonGroup } from 'react-bootstrap'
import { URL, useTodoList } from '../contexts/AllTodosContext'
import DeleteModal from './DeleteModal'
import EditModal from './EditModal'

const ListTodos = () => {
  const { todoList, setTodoList } = useTodoList()
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [openEditModal, setOpenEditModal] = useState(false)
  const [activeTodo, setActiveTodo] = useState()

  const handleDeleteShow = (e) => {
    setActiveTodo(e)
    setOpenDeleteModal(true)
  }

  const handleEditShow = (e) => {
    setActiveTodo(e)
    setOpenEditModal(true)
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
                      <Button onClick={() => handleEditShow(todo)}>Edit</Button>
                      <Button
                        onClick={() => handleDeleteShow(todo)}
                        variant='danger'
                      >
                        Delete
                      </Button>
                    </ButtonGroup>
                  </ListGroup.Item>
                ))}
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
          )}
        </ListGroup>
      </div>
    </>
  )
}

export default ListTodos
