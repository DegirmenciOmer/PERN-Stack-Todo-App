import React, { useState } from 'react'
import { Button, Container, Form, Row, Col, InputGroup } from 'react-bootstrap'

const Input = () => {
  const [description, setDescription] = useState('')

  const onSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      const body = { description }
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      })
      window.location = '/'
      console.log({ response })
    } catch (error) {
      console.log(error)
    }
  }
  console.log({ description })
  return (
    <Container>
      <h1 className='text-center mt-5'>Pern Todo App</h1>
      <Row>
        <Form onSubmit={onSubmitTodo} className='d-flex mt-5'>
          <InputGroup>
            <Form.Control
              value={description}
              type='text'
              placeholder='Enter a new todo'
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button variant='success' type='submit'>
              Add
            </Button>
          </InputGroup>
        </Form>
      </Row>
    </Container>
  )
}

export default Input
