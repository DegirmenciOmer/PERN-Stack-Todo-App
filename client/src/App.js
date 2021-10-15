import './App.css'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Input from './components/Input'
import Header from './components/Header'
import TodoItem from './components/TodoItem'

function App() {
  return (
    <TodoListProvider>
      <Container className='col-xs-4 col-md-6 mx-auto'>
        <Header />

        <Input />
        <ListTodos />
      </Container>
    </TodoListProvider>
  )
}

export default App
