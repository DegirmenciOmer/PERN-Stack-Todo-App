import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { useTodoList } from './../contexts/AllTodosContext'

const Input = () => {
  const { description, setDescription, onSubmitTodo } = useTodoList()
  const handleChangeInput = (e) => {
    e.preventDefault()
    const { value, maxLength } = e.target
    const limitedValue = value.slice(0, maxLength)

    setDescription(limitedValue)
  }

  return (
    <Form onSubmit={onSubmitTodo} className='d-flex'>
      <InputGroup className='mb-2'>
        <Form.Control
          maxLength='30'
          value={description}
          type='text'
          placeholder='Enter a new todo'
          onChange={(e) => handleChangeInput(e)}
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
  )
}

export default Input
