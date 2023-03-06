// VARIABLES
import express from 'express'
import { config } from 'dotenv'
import logger from 'morgan'
import cookieParser from 'cookie-parser'
import cors from 'cors'

import conn from './db/conn.js'
import routes from './routes/v1/route.js'

const env = config()
const app = express()
const port = process.env.PORT

const db = conn(process.env.MONGO_URI)

app.use(cors())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/api/v1/main', routes)

app.all('*', (req, res) => {
  return res.status(404).json({ error: 'Resource does not exist' })
})

app.listen(port, () => console.log(`Server running on port ${port}...`))
