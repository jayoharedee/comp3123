process.on('SIGINT', () => {
    console.log('uptime: ' + process.uptime());
    server.close()
})

process.on('SIGTERM', () => {
    console.log('uptime: ' + process.uptime());
    server.close()
})

const express = require('express')

const app = express()

const server = app.listen(3000, () => console.log('Server ready'))