import './App.css'
import { Container } from 'react-bootstrap'
import ListTodos from './components/ListTodos'
import { TodoListProvider } from './contexts/AllTodosContext'
import Input from './components/Input'
import Header from './components/Header'
import Login from './components/Login'
import useLocalStorage from './hooks/useLocalStorage'
import Register from './components/Register'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Switch from 'react-bootstrap/esm/Switch'

function App() {
  const [id, setId] = useLocalStorage('todo-user-id', null)

  return (
    <Router>
      <Switch style={{ height: '100vh' }}>
        <TodoListProvider id={id}>
          {id ? (
            <>
              <Route path='/'>
                <Redirect to='/home' />
              </Route>

              <Route path='/home'>
                <Container className='col-sm-12 col-md-8 col-lg-4 mx-auto h-40'>
                  <Header setId={setId} id={id} />
                  <Input />
                  <ListTodos id={id} />
                </Container>
              </Route>
            </>
          ) : (
            <>
              <Route path='/'>
                <Redirect to='/login' />
              </Route>
              <Route path='/register'>
                <Register setId={setId} id={id} />
              </Route>
              <Route path='/login'>
                <Login setId={setId} id={id} />
              </Route>
            </>
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
