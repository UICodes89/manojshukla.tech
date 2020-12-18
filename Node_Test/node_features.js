var events = require('events').EventEmitter;

var EventEmitter = new events();

EventEmitter.on("connection", function() {
    console.log("Hello");
})

EventEmitter.emit('connection');