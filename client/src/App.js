import './App.css'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Input from './components/Input'
import Header from './components/Header'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Register from './components/Register'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch'

function App() {
  const [id, setId] = useLocalStorage('todo-user-id', null)
  return (
    <Router>
      <Switch>
        <TodoListProvider>
          {id ? (
            <Route exact path='/'>
              <Container className='col-sm-12 col-md-8 col-lg-4 mx-auto h-40'>
                <Header />
                <Input />
                <ListTodos id={id} />
              </Container>
            </Route>
          ) : (
            <Route path='/register'>
              <Register setId={setId} id={id} />
            </Route>
          )}
        </TodoListProvider>
      </Switch>
    </Router>
  )
}

export default App

/* <Route path='/login'>
            {' '}
            <Login setId={setId} />
          </Route> */
