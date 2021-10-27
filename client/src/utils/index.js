export const URL =
  process.env.NODE_ENV === 'development'
    ? // ? process.env.REACT_APP_DEV_URL
      process.env.REACT_APP_PRODUCTION_URL
    : process.env.REACT_APP_PRODUCTION_URL

export const fetchTodos = async (id) => {
  try {
    const response = await fetch(`${URL}/todos/${id}`)
    const data = await response.json()
    console.log(data)
    return data
  } catch (err) {
    console.error(err.message)
  }
}

export const editTodo = async (description, id) => {
  try {
    const body = { description }

    await fetch(`${URL}/todos/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    window.location = '/home'
  } catch (error) {
    console.error(error)
  }
}

export const toggleTodo = async (toggleId) => {
  try {
    await fetch(`${URL}/todos/toggle/${toggleId}`, { method: 'PUT' })
  } catch (error) {
    console.error(error)
  }
}
