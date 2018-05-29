let Webcom = require('webcom');
let dateFormat = require('dateformat');

let myRef = new Webcom('https://io.datasync.orange.com/base/pello/dateTimeService');

class dateTimeService {

    tick(iter) {
        
        let mess = {
            iteration : iter,
            date: dateFormat(new Date(), "hh:MM:ss")
        };
        
        myRef.push(mess);
        console.log("dateTimeService tick : " + iter);
    };
}

module.exports = dateTimeService;
