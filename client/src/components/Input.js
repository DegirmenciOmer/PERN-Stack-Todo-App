import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

export const URL = 'http://localhost:5000/todos'

const Input = () => {
  const [description, setDescription] = useState('')

  const onSubmitTodo = async (e) => {
    e.preventDefault()
    try {
      const body = { description }

      if (description.length < 3) {
        alert('You must type at least 3 characters')
      } else {
        await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        })
        setDescription('')
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <h1 className='text-center mt-5'>Pern Todo App</h1>
      <div>
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
      </div>
    </div>
  )
}

export default Input
