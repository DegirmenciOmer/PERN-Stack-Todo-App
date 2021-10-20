import { useEffect } from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'
import { fetchTodos } from './../utils/index'

const ListTodos = ({ id }) => {
  const { todoList, setTodoList } = useTodoList()

  useEffect(() => {
    let isMounted = true

    fetchTodos(id).then((data) => isMounted && setTodoList(data))
    return () => {
      isMounted = false
    }
  }, [])

  return (
    <>
      <div>
        <ListGroup>
          {todoList.length === 0 ? (
            <Spinner
              className='text-align-center'
              animation='border'
              role='status'
            >
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          ) : (
            <>
              {todoList.map((todo) => (
                <TodoItem key={todo.todo_id} todo={todo} />
              ))}
            </>
          )}
        </ListGroup>
      </div>
    </>
  )
}

export default ListTodos
