import React, { useContext, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { URL } from '../utils'

const TodoListContext = React.createContext()

export function useTodoList() {
  return useContext(TodoListContext)
}

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useLocalStorage('todolist', [])
  const [description, setDescription] = useState('')
  const [searchValue, setSearchValue] = useState(null)
  const onSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      const body = { description }

      if (description.length < 3) {
        alert('You must type at least 3 characters')
      } else {
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        })
        setDescription('')
      }
      window.location = '/'
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
