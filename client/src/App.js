import './App.css'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Input from './components/Input'
import Header from './components/Header'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [id, setId] = useState()
  return id ? (
    <TodoListProvider>
      <Container className='col-sm-12 col-md-8 col-lg-4 mx-auto h-40'>
        <Header />
        <Input />
        <ListTodos />
      </Container>
    </TodoListProvider>
  ) : (
    <Login setId={setId} />
  )
}

export default App
