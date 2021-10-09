import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useTodoList } from './../contexts/AllTodosContext'

const Input = () => {
  const { description, setDescription, onSubmitTodo } = useTodoList()

  return (
    <div>
      <h1 className='text-center mt-5'>Pern Todo App</h1>
      <div>
        <Form onSubmit={onSubmitTodo} className='d-flex mt-5'>
          <InputGroup className='mb-3'>
            <Form.Control
              value={description}
              type='text'
              placeholder='Enter a new todo'
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              style={{ fontSize: '19px', paddingTop: '0', paddingBottom: '0' }}
              variant='success'
              type='submit'
            >
              <i className='fa fa-paper-plane'></i>
            </Button>
          </InputGroup>
        </Form>
      </div>
    </div>
  )
}

export default Input
