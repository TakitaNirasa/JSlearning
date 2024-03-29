// Подключение модуля express
const express = require('express')
const userRouter = require('./routes/user_routes')
const postRouter = require('./routes/post_routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use (express.json())
app.use ('/api', userRouter)
app.use ('/api', postRouter)

app.listen(PORT, () => { console.log('server started in port ${PORT}') })