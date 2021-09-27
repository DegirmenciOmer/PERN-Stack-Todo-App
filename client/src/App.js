import './App.css'
import Input from './components/Input'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'

function App() {
  return (
    <TodoListProvider>
      <Container>
        <Input />
        <ListTodos />
      </Container>
    </TodoListProvider>
  )
}

export default App
