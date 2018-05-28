const express = require('express');
const cronJob = require('./cronJob');
const port = 3003;

class Server {

  constructor() {
    this.app = express();

    this.app.get('/', function (req, res) {
      res.send('Hello World');
    });

    this.app.get('/dateTimeJob/start', function (req, res) {
      let mess = cronJob.startDateTimeJob();
      res.send(mess);
    });

    this.app.get('/dateTimeJob/stop', function (req, res) {
      let mess = cronJob.stopDateTimeJob();
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
