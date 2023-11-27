import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import menuRouter from './router/menu.router.js'

dotenv.config()
const PORT = process.env.PORT || 80

const app = express()

app.use(express.json())
app.use(cors({
  origin: '*', // Разрешить запросы от любого источника
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}))

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/api/menu', menuRouter)
