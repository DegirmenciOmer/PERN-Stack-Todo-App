import './App.css'
import Input from './components/Input'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Dropdown from './components/Dropdown'
import { useState } from 'react'
import Login from './components/Login'

function App() {
  const [value, setValue] = useState(null)
  const [id, setId] = useState()
  return id ? (
    <TodoListProvider>
      <Container className='col-xs-4 col-md-6 mx-auto'>
        <Input />
        <Dropdown
          prompt='Search...'
          setValue={setValue}
          onChange={(val) => setValue(val)}
          value={value}
        />
        <ListTodos />
      </Container>
    </TodoListProvider>
  ) : (
    <Login setId={setId} />
  )
}

export default App
