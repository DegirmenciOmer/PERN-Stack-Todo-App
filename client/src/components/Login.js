import React, { useRef } from 'react'
import { Container, Form, Button, ButtonGroup } from 'react-bootstrap'
import { v4 as uuidV4 } from 'uuid'

export default function Login({ setId }) {
  const idRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()
    setId(idRef.current.value)
  }

  function createNewId() {
    setId(uuidV4())
  }

  return (
    <Container className='align-items-center d-flex justify-content-center'>
      <Form
        onSubmit={handleSubmit}
        md='8'
        className='align-items-center d-flex flex-column '
      >
        <Form.Group className='mb-2'>
          <Form.Control
            placeholder='Enter Your Id'
            type='text'
            ref={idRef}
            required
          />
        </Form.Group>
        <ButtonGroup className='w-100 ' aria-label='Basic example'>
          <Button className='w-50' type='submit'>
            <span>
              <i className='fa fa-sign-in-alt'></i>
              <span>Login</span>
            </span>
          </Button>
          <Button className='w-50' onClick={createNewId} variant='secondary'>
            New Id
          </Button>
        </ButtonGroup>
      </Form>
    </Container>
  )
}
