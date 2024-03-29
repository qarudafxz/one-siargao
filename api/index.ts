import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
import { rateLimit } from 'express-rate-limit'
import { generateShortestPath } from './controllers/index'

dotenv.config()

const PORT = process.env.PORT || 9000
const app = express()
app.use(
 cors({
  origin: '*',
  methods: ['POST']
 })
)
app.use(morgan('tiny'))
app.disable('x-powered-by')

const limiter = rateLimit({
 windowMs: 1000,
 max: 3,
 standardHeaders: 'draft-7',
 legacyHeaders: false
})

app.post('/', generateShortestPath)

app.use(limiter)

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))
