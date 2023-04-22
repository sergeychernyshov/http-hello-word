require('dotenv').config()
const express = require('express')
const app = express()

const port = process.env.PORT


app.use('/', require('./routes/hello-word'));
app.use('/health-check', require('./routes/health-check'));

app.listen(port, () => {
    console.log(`Start app, port ${port}`)
})