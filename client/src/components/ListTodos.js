import { useEffect, useState } from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'
import { fetchTodos } from './../utils/index'

const ListTodos = ({ user }) => {
  const { todoList, setTodoList } = useTodoList()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true

    if (user) {
      fetchTodos(user.user_id)
        .then(setLoading(true))
        .then((data) => {
          isMounted && setTodoList(data)
          setLoading(false)
        })
      return () => {
        isMounted = false
      }
    }
  }, [])

  return (
    <>
      <div>
        <ListGroup>
          {loading && (
            <Spinner className='m-auto mt-5' animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}
          {typeof todoList === 'string' ||
          (todoList.length === 0 && !loading) ? (
            <p className='text-center'>Your todo list is empty.</p>
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
