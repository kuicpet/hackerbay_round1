import path from 'path'
import express from 'express'
import morgan from 'morgan'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.get('/', (req,res) => {
    res.send('API running...')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on port ${PORT}`))