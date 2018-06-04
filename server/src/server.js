const express = require('express');
const cronJob = require('./cronJob');
const port = 3003;

class Server {

  constructor() {
    this.app = express();

    this.app.get('/', function (req, res) {
      res.send('Hello World');
    });

    this.app.get('/dateTimeJob/manage', function (req, res) {
      let mess = cronJob.startStopJob(req.query.action);
      res.send(mess);
    });
  }

  start() {
    this.app.listen(port, function() {
      console.log(`Start server on port ${port}.`);
      console.log('Start cron service');

      cronJob.startCronService();
    });
  }
}
module.exports = Server;
