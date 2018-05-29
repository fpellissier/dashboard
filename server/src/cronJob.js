let cron = require('cron');
let dateTimeService = require('./dateTimeService');
var dateTimeJob = null;

function startCronService() {
    let iteration = 0,
    dtService = new dateTimeService();

    if (!this.dateTimeJob) {
        this.dateTimeJob = new cron.CronJob({
            cronTime: '00,15,30,45 * * * * *',
            onTick: function() {
                dtService.tick(iteration);
                iteration++;
            },
            start: true,
            timeZone: 'Europe/Paris'
        });
    } else {
        console.log("dateTimeJob already started");
    }
}

function stopDateTimeJob() {
    if(this.dateTimeJob && this.dateTimeJob.running) {
        this.dateTimeJob.stop();
        return "Date Time Job stopped";
    } else {
        return "Date Time Job is already stopped";
    }
}

function startDateTimeJob() {
    if(this.dateTimeJob) {
        if(!this.dateTimeJob.running) {
            this.dateTimeJob.start();
            return "Date Time Job has been started";
        } else {
            return "Date Time Job is already running"
        }
    } else {
        return "The cron job Date Time does not exist";
    }
}

module.exports.startCronService = startCronService;
module.exports.startDateTimeJob = startDateTimeJob;
module.exports.stopDateTimeJob = stopDateTimeJob;