import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useTodoList } from './../contexts/AllTodosContext'

const Input = () => {
  const { description, setDescription, onSubmitTodo } = useTodoList()

  return (
    <div>
      <h1 className='text-center mt-4'>Pern Todo App</h1>
      <div>
        <Form onSubmit={onSubmitTodo} className='d-flex mt-5'>
          <InputGroup className='mb-2'>
            <Form.Control
              value={description}
              type='text'
              placeholder='Enter a new todo'
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              style={{
                fontSize: '16px',
                paddingTop: '0',
                paddingBottom: '0',
              }}
              variant='secondary'
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
