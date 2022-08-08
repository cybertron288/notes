const express = require('express');

const app = express()

const server = require('http').Server(app)
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRoutes = require('./routes/notesRoutes')

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
      'PATCH',
      'DELETE'
    ],
  
    allowedHeaders: [
      'Content-Type'
    ]
  };
app.use(bodyParser.json());
app.use(cors(corsOpts));

app.use('/api', noteRoutes)

server.listen(process.env.PORT || 5005, () => {
    console.log('\x1b[103m\x1b[30m%s\x1b[0m', ` <<<<<<<--- Listening to port ${process.env.PORT || 5005} --->>>>>>>`);
  });