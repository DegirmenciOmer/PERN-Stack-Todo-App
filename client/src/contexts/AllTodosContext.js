import React, { useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TodoListContext = React.createContext()

export function useTodoList() {
  return useContext(TodoListContext)
}

export function TodoListProvider({ children }) {
  const [todoList, setTodoList] = useLocalStorage('todolist', [])

  const fetchTodos = async () => {
    try {
      const response = await fetch('http://localhost:5000/todos')
      const data = await response.json()
      setTodoList(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchTodos()
  }, [])

  console.log(todoList)

  return (
    <TodoListContext.Provider value={{ todoList }}>
      {children}
    </TodoListContext.Provider>
  )
}
