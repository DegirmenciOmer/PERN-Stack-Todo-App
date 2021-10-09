export const URL =
  process.env.NODE_ENV === 'development'
    ? process.env.REACT_APP_DEV_URL
    : process.env.REACT_APP_PRODUCTION_URL
console.log(URL, process.env.NODE_ENV)

export const fetchTodos = async () => {
  try {
    const response = await fetch(URL)
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

    await fetch(`${URL}/${id}`, {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    })

    window.location = '/'
  } catch (error) {
    console.error(error)
  }
}

export const toggleTodo = async (toggleId) => {
  try {
    await fetch(`${URL}/toggle/${toggleId}`, { method: 'PUT' })
  } catch (error) {
    console.error(error)
  }
}
