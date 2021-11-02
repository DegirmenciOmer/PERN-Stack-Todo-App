import React, { useContext, useState } from 'react'
import { URL } from '../utils'

const TodoListContext = React.createContext()

export function useTodoList() {
  return useContext(TodoListContext)
}

export function TodoListProvider({ children, user }) {
  const [todoList, setTodoList] = useState([])
  const [description, setDescription] = useState('')
  const [searchValue, setSearchValue] = useState(null)
  const onSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      const body = { description, user_id: user.user_id }

      if (description.length < 3) {
        alert('You must type at least 3 characters')
      } else {
        //@GET Todos
        await fetch(`${URL}/todos/`, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        })
        setDescription('')
      }
      window.location = '/home'
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        setTodoList,
        onSubmitTodo,
        description,
        setDescription,
        searchValue,
        setSearchValue,
      }}
    >
      {children}
    </TodoListContext.Provider>
  )
}
