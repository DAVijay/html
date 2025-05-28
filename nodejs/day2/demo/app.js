const express = require('express')
const app = express()
const port = 3002

const task = require('./task')

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/tasks', (req, res) => {
  res.send(JSON.stringify(task))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
