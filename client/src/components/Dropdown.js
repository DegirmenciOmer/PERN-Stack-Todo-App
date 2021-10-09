import React, { useEffect, useRef, useState } from 'react'
import { useTodoList } from '../contexts/AllTodosContext'
import './Dropdown.css'
import TodoItem from './TodoItem'

const Dropdown = ({ value, setValue, prompt }) => {
  const { todoList } = useTodoList()

  const [open, setOpen] = useState(false)
  const [cursor, setCursor] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [options, setOptions] = useState([])

  const inputRef = useRef(null)

  useEffect(() => {
    document.addEventListener('click', toggleDropdown)

    searchItems(searchQuery)
    return () => {
      document.removeEventListener('click', toggleDropdown)
    }
  }, [searchQuery])

  function toggleDropdown(e) {
    setOpen(e && e.target === inputRef.current)
  }

  const searchItems = (q) => {
    let opts = []
    if (q) {
      todoList.forEach((obj) => {
        obj.description.toLocaleLowerCase().includes(q.toLowerCase()) &&
          opts.push(obj)
      })

      setOptions(opts.slice(0, 4))
    } else {
      return 'not found'
    }
  }

  const keyboardNavigation = (e) => {
    switch (e.key) {
      case 'ArrowDown':
        open
          ? setCursor((cur) => (cur < options.length - 1 ? cur + 1 : 0))
          : setOpen(true)
        break

      case 'ArrowUp':
        setCursor((cur) => (cur > 0 ? cur - 1 : options.length - 0))
        break

      case 'Escape':
        setOpen(false)
        break

      case 'Enter':
        options && cursor > -1 && handleSelect(options[cursor])
        break

      default:
        break
    }
  }
  //debouncing
  function handleSelect(val) {
    setValue(val)
    setOpen(false)
    setCursor(0)
    setOptions([])
  }

  return (
    <>
      <div className='dropdown'>
        <div className='control'>
          <div className='selected-value'>
            <input
              data-testid='input'
              ref={inputRef}
              placeholder={value ? value.description : prompt}
              type='text'
              value={value ? value.description : searchQuery}
              onChange={(e) => {
                !open && setOpen(true)
                setSearchQuery(e.target.value)
                setValue(null)
              }}
              onKeyDown={(e) => keyboardNavigation(e)}
              onMouseOver={() => setCursor(0)}
              onMouseOut={() => setCursor(0)}
            />
          </div>
          <div data-testid='arrow' className={`arrow ${open && 'open'}`}></div>
        </div>
        <div data-testid='options' className={`options ${open && 'open'}`}>
          {options.length > 0 &&
            options.map((option, index) => (
              <div
                data-testid={`opt${index}`}
                className={`option ${
                  (value === option && 'selected') ||
                  (option === options[cursor] && 'selected')
                }`}
                onClick={() => {
                  handleSelect(option)
                }}
                key={option.todo_id}
              >
                {option.description}
              </div>
            ))}
        </div>
      </div>
      {value && <TodoItem todo={value} />}
    </>
  )
}

export default Dropdown
