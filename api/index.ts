import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const PORT = process.env.PORT || 9000
const app = express()

app.listen(PORT, () => console.log(`Server is listening to port ${PORT}`))
