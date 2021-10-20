import React from 'react'
import { Button, Form } from 'react-bootstrap'
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
    <Form onSubmit={onSubmitTodo} className='d-flex mt-5 mb-4'>
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
        }}
        variant='outline-light'
        type='submit'
      >
        <i className='fa fa-plus'></i>
      </Button>
    </Form>
  )
}

export default Input
