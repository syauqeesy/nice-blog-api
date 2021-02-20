require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/images', (express.static(path.join(__dirname, 'images'))))

app.get('/', (_, response) => {
  return response.status(200).send({
    message: 'Welcome to Nice blog API'
  })
})

app.get('*', (_, response) => {
  return response.status(404).send({
    message: 'URL not found'
  })
})

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})
