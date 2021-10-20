import React, { useRef, useState } from 'react'
import { Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'
import { Link } from 'react-router-dom'

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [email, setEmail] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setEmail(emailRef.current.value)
  }

  return (
    <Container className='align-items-center d-flex justify-content-center'>
      <Form
        onSubmit={handleSubmit}
        md='8'
        className='align-items-center d-flex flex-column mb-6'
      >
        <Form.Group className='mb-2 '>
          <Form.Control
            placeholder='Email'
            type='text'
            ref={emailRef}
            required
          />
          <Form.Control
            placeholder='Password'
            type='text'
            ref={passwordRef}
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
    </Container>
  )
}
