import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { URL } from '../utils'
import LoginWarningModal from './LoginWarningModal'

export default function Login({ id, setId }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [openLoginWarningModal, setOpenLoginWarningModal] = useState(false)

  let history = useHistory()

  async function login(e) {
    e.preventDefault()
    try {
      const body = { email, password }
      console.log(JSON.stringify(body))
      const response = await fetch(`${URL}/users/login`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      console.log(response)
      const data = await response.json()
      console.log(data)
      setId(data.user_id)
      history.push('/home')
      return data
    } catch (err) {
      console.log(err)
      setOpenLoginWarningModal(true)
    }
  }

  return (
    <Container className='align-items-center d-flex justify-content-center'>
      <Form
        onSubmit={login}
        md='8'
        className='align-items-center d-flex flex-column mb-6'
      >
        <Form.Group className='mb-2 '>
          <Form.Control
            placeholder='Email'
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Form.Control
            placeholder='Password'
            type='text'
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button className='w-100' type='submit'>
          Login
        </Button>

        <Link to='/register'>
          <p> Sign up</p>
        </Link>
      </Form>
      {openLoginWarningModal && (
        <LoginWarningModal
          openModal={openLoginWarningModal}
          setId={setId}
          setOpenModal={setOpenLoginWarningModal}
        />
      )}
    </Container>
  )
}
