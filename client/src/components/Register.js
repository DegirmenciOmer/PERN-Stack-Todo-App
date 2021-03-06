import React, { useState } from 'react'
import { Container, Form, Button, Modal } from 'react-bootstrap'
import { URL } from '../utils'
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom'

export default function Register({ setUser, id }) {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  let history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()
    try {
      const body = {
        name: username,
        email: email,
        password: password,
      }

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const res = await axios.post(`${URL}/users/register`, body, config)
      setError(null)
      res.data && setUser(res.data)

      history.push('/home')
    } catch (err) {
      console.log(err)
      setError(err)
    }
  }

  return (
    <Container className='align-items-center flex-column d-flex justify-content-center h-100'>
      <Form
        onSubmit={handleRegister}
        md='8'
        className='align-items-center d-flex flex-column '
      >
        <Form.Group className='mb-2'>
          <Form.Control
            placeholder='Name'
            type='text'
            required
            onChange={(e) => setUsername(e.target.value)}
          />
          <Form.Control
            placeholder='Email'
            type='text'
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            placeholder='Password'
            type='text'
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button className='w-100' type='submit'>
          Sign up
        </Button>
      </Form>
      <p className='mt-5 mb-4'>Already signed up? </p>
      <Link to='/login'>
        <Button variant='secondary'> Sign in</Button>
      </Link>
      {error && (
        <Modal
          className='text-danger'
          centered
          show={error}
          onHide={() => setError(null)}
        >
          <Modal.Header>
            <Modal.Title>Oops!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{error.message}</Modal.Body>
          <Modal.Footer>
            <Button variant='secondary' onClick={() => setError(null)}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  )
}
