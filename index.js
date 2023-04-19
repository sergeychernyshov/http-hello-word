require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT

app.get('/', (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello World')
})

app.listen(port, () => {
    console.log(`Start app, port ${port}`)
})