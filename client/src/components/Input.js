import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useTodoList } from './../contexts/AllTodosContext'

const Input = () => {
  const { description, setDescription, onSubmitTodo } = useTodoList()

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
