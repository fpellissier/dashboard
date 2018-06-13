let cron = require('cron');
let dateTimeService = require('./dateTimeService');

function startCronService() {
    let iteration = 0,
    dtService = new dateTimeService();

    if (!this.dateTimeJob) {
        this.dateTimeJob = new cron.CronJob({
            cronTime: '00,15,30,45 * * * * *',
            onTick: function() {
                dtService.tick();
            },
            start: false,
            timeZone: 'Europe/Paris'
        });
    } else {
        console.log("dateTimeJob already started");
    }
}

function startStopJob(/*String*/ action){

    switch(action){
        case 'status':
            return this.dateTimeJobStatus();
            break;
        case 'start':
            return this.startDateTimeJob();
            break;
        case 'stop':
            return this.stopDateTimeJob()
            break;
        default:
            return "unknown action... " + action;
    }
};

function stopDateTimeJob() {
    if(this.dateTimeJob && this.dateTimeJob.running) {
        this.dateTimeJob.stop();
        return "DateTime Job stopped";
    } else {
        return "DateTime Job is already stopped";
    }
}

function startDateTimeJob() {
    if(this.dateTimeJob) {
        if(!this.dateTimeJob.running) {
            this.dateTimeJob.start();
            return "DateTime Job has been started";
        } else {
            return "DateTime Job is already running"
        }
    } else {
        return "No DateTime job found";
    }
}

function dateTimeJobStatus() {
    if(this.dateTimeJob) {
        if(this.dateTimeJob.running) {
            return "DateTime Job is running";
        } else {
            return "DateTime Job is not running";
        }
    } else {
        return "No DateTime job found";
    }
}

module.exports.startCronService = startCronService;
module.exports.startStopJob = startStopJob;
module.exports.dateTimeJobStatus = dateTimeJobStatus;
module.exports.startDateTimeJob = startDateTimeJob;
module.exports.stopDateTimeJob = stopDateTimeJob;
