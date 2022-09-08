import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/post.js'

const app = express()

app.use(bodyParser.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

//every routes inside the post routes will start with post
app.use('/posts', postRoutes)

// app.listen(PORT, () => console.log('Server Runing on port: ${PORT}'))
const CONNECTION_URL =
  'mongodb+srv://BackendBryans:BackendBryans@cluster0.dosyhde.mongodb.net/?retryWrites=true&w=majority'

const PORT = process.env.PORT || 5000

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.messsage))
