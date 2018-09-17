const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const server = express()

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))

server.get('/register', (req, res) => {
    res.send('Hi')
  })
  
  
  server.post('/register', (req, res)=> {
    console.log(req.body)
    userExists(req.body.users)
    .then(exists => {
      if (exists) {
        return res.status(400).send({ message: 'User exists' })
      }
      createUser(req.body.users, req.body.password)
      .then(() => res.status(201).end())
    })
    .catch(err => {
      res.status(500).send({ message: err.message })
    })
  })
module.exports = server
