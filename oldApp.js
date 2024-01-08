const express = require('express');
const app = express();
const path = require('path');

const logEvents = require('./logEvents');
const EventEmitter = require('events');

const PORT = process.env.PORT || 3500;

class Emitter extends EventEmitter {};
const myEmitter = new Emitter();

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
});

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/*
myEmitter.on('log', (msg) => logEvents(msg));

    myEmitter.emit('log', 'Log event emitted!');
    */