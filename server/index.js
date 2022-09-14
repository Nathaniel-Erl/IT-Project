import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import userRoutes from './routes/user.js'
import landingRoutes from './routes/landing.js'
import user from './models/userSchema.js'

const app = express()

app.use(bodyParser.json({ limit: '1mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))
app.use(cors())
app.use(express.json())

app.use('/:username', userRoutes)

app.use('/', landingRoutes)

// app.listen(PORT, () => console.log('Server Runing on port: ${PORT}'))
const CONNECTION_URL =
  'mongodb+srv://BackendBryans:BackendBryans@cluster0.dosyhde.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 8080

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.messsage))
