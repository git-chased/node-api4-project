require('dotenv').config()
const express = require('express')
const cors = require('cors')

const server = express()

const PORT = 9000

server.use(express.json())
server.use(cors())

server.get('/api/hello', (res, req) => {
    res.json({message: `api is working`})
})

server.use('*', (req, res) => {
    res.send(`<h1>Hello, there!</h1>`)
})

server.use((err, req, res, next) => {
    res.status(500).json({
        message: err.message
    })
})

server.listen(PORT, () => { 
    console.log(`Listening on ${PORT}`)
})