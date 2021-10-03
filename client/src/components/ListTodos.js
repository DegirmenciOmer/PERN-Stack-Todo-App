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

  const handleToggle = (toggleId) => {
    toggleTodo(toggleId)
    window.location = '/'
  }

  const toggleTodo = async (toggleId) => {
    try {
      await fetch(`${URL}/toggle/${toggleId}`, { method: 'PUT' })
    } catch (error) {
      console.error(error)
    }
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
              {todoList.map((todo) => (
                <ListGroup.Item
                  className='d-flex justify-content-between'
                  key={todo.todo_id}
                >
                  <p
                    onClick={() => handleToggle(todo.todo_id)}
                    // className={todo.is_done && 'done'}
                    style={{
                      marginTop: '5px',
                      width: '100%',
                      textDecorationLine: `${
                        todo.is_done ? 'line-through' : 'none'
                      } `,
                    }}
                  >
                    {todo.description}
                  </p>
                  <ButtonGroup>
                    <Button onClick={() => handleEditShow(todo)}>
                      <i className='fa fa-edit'></i>
                    </Button>
                    <Button
                      onClick={() => handleDeleteShow(todo)}
                      variant='danger'
                    >
                      <i className='fa fa-trash'></i>
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
