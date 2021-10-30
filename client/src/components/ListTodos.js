import { useEffect, useState } from 'react'
import { ListGroup, Spinner } from 'react-bootstrap'
import { useTodoList } from '../contexts/AllTodosContext'
import TodoItem from './TodoItem'
import { fetchTodos } from './../utils/index'

const ListTodos = ({ id }) => {
  const { todoList, setTodoList } = useTodoList()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    let isMounted = true
    console.log({ todoList })

    if (id) {
      fetchTodos(id)
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

  console.log(todoList)

  return (
    <>
      <div>
        <ListGroup>
          {loading && (
            <Spinner className='m-auto mt-5' animation='border' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </Spinner>
          )}
          {todoList && todoList.length === 0 ? (
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
