import express from 'express'
import pool from './db.js'
import cors from 'cors'

const app = express()
app.use(
  cors({
    cors: true,
    origins: ['http://localhost:3000'],
  })
)

app.use(express.json())

export const PORT = process.env.PORT || 5000

// register user
app.post('/users/register', async (req, res) => {
  try {
    const { name, email, password } = req.body
    res.setHeader('Content-Type', 'application/json')
    const newUser = await pool.query(
      'INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING *',
      [name, email, password]
    )

    res.json(newUser.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(400).json({ message: err.message })
  }
})

//add new todo
app.post('/todos', async (req, res) => {
  try {
    const { description, user_id } = req.body
    if (description.length > 55) {
      res.status(400)
      throw new Error('Too long text')
    }

    console.log(req.body.user_id)
    res.setHeader('Content-Type', 'application/json')
    const newTodo = await pool.query(
      'INSERT INTO todo (description, user_id) VALUES($1, $2) RETURNING *',
      [description, user_id]
    )

    res.json(newTodo.rows[0])
  } catch (err) {
    console.error(err.message)
    res.status(400).json({ message: err.message })
  }
})

//get all todos
app.get('/todos', async (req, res) => {
  try {
    const allTodos = await pool.query(
      'SELECT * FROM todo ORDER BY updated_at DESC'
    )

    res.json(allTodos.rows)
  } catch (error) {
    console.error(error.message)
    res.json(error.message)
  }
})

//get one todo
app.get('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const selectedTodo = await pool.query(
      'SELECT * FROM todo WHERE todo_id = $1',
      [id]
    )

    res.json(selectedTodo.rows[0])
  } catch (error) {
    console.error(error.message)
    res.json(error.message)
  }
})
//update a todo
app.put('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params
    const { description } = req.body

    await pool.query('UPDATE todo SET description=$1 WHERE todo_id = $2', [
      description,
      id,
    ])

    res.json('Todo was updated.')
  } catch (error) {
    console.error(error.message)
    res.json(error.message)
  }
})

//mark a todo as done
app.put('/todos/toggle/:id', async (req, res) => {
  try {
    const { id } = req.params
    await pool.query(
      'UPDATE todo SET is_done = NOT(COALESCE(is_done, FALSE)) WHERE todo_id = $1',
      [id]
    )
  } catch (error) {
    console.error(error.message)
    res.json(error.message)
  }
})

//delete a todo
app.delete('/todos/:id', async (req, res) => {
  try {
    const { id } = req.params

    const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [
      id,
    ])

    res.json('Todo was deleted.')
  } catch (error) {
    console.error(error.message)
    res.json(error.message)
  }
})

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`)
})
