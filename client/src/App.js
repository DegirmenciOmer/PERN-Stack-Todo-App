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
  const [user, setUser] = useLocalStorage('todo-user', null)

  return (
    <Router>
      <Switch style={{ height: '100vh' }}>
        <TodoListProvider user={user}>
          {user ? (
            <>
              <Route path='/'>
                <Redirect to='/home' />
              </Route>

              <Route path='/home'>
                <Container className='col-sm-12 col-md-8 col-lg-4 mx-auto p-0 h-40'>
                  <Header setUser={setUser} user={user} />
                  <Input />
                  <ListTodos user={user} />
                </Container>
              </Route>
            </>
          ) : (
            <>
              <Route path='/'>
                <Redirect to='/login' />
              </Route>
              <Route path='/register'>
                <Register setUser={setUser} user={user} />
              </Route>
              <Route path='/login'>
                <Login setUser={setUser} user={user} />
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
            <Login setUser={setUser} />
          </Route> */
