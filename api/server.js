const express = require('express');
const cors = require('cors');


const server = express();

server.use(cors());
server.use(express.json());

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message,
        stack: err.stack
    })
});