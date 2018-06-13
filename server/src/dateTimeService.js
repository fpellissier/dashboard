let Webcom = require('webcom');
let dateFormat = require('dateformat');

let myRef = new Webcom('https://io.datasync.orange.com/base/pello/dateTimeService');

class dateTimeService {

    tick() {
        let aujourdhui = dateFormat(new Date(), "yyyymmdd"),
        heure = dateFormat(new Date(), "hh:MM:ss"),
        T = {
            T1 : Math.floor(Math.random()*100000),
            T2 : Math.floor(Math.random()*100000),
            T3 : Math.floor(Math.random()*100000),
            T4 : Math.floor(Math.random()*100000),
            T5 : Math.floor(Math.random()*100000),
            T6 : Math.floor(Math.random()*100000),
            T7 : Math.floor(Math.random()*100000),
            T8 : Math.floor(Math.random()*100000),
            T9 : Math.floor(Math.random()*100000)
        };

        let mess = '{"' + aujourdhui + '":{"' + heure +'":' + JSON.stringify(T) + '}}';
        console.log("dateTimeService tick : " + mess);
        
        myRef.push(JSON.parse(mess));
    };
}

module.exports = dateTimeService;
