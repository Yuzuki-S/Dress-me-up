const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const auth = require('./routes/auth');
const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.use('/#/auth', auth)

module.exports = server
