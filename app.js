const dashboardServer = require('./server/src/server');
const express = require('express');

process.title = "franckApp";

var server = new dashboardServer();
server.start();

server.app.use('/client', express.static(__dirname + '/client'));
server.app.use('/server', express.static(__dirname + '/server/admin'));

