// Подключение модуля express
const express = require('express')

const PORT = process.env.PORT || 8080

const app = express()

app.get('/', (req, res) => {
    res.send ('HELLO POSTGRES + NODEJS!!!')
})

app.listen(PORT, () => { console.log('server started in port ${PORT}') })