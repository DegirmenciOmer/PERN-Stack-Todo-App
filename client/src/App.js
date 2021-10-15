import './App.css'
import Input from './components/Input'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import Header from './components/Header'

function App() {
  return (
    <TodoListProvider>
      <Container className='col-xs-4 col-md-6 mx-auto'>
        <Header />
        <ListTodos />
      </Container>
    </TodoListProvider>
  )
}

export default App
