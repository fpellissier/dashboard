var myRef = new Webcom('https://io.datasync.orange.com/base/pello/dateTimeService');
var datetime, iter;

let app = new Vue({
    el:'#DATETIME_data',
    data: {
        date: "hh:mm:ss",
        iteration: 12
    },
    methods: {
        updateDate: function(date) {
            this.date = date;
        },
        updateIter: function(it){
            this.iteration = it;
        }
    }
});

myRef.on('child_added', function(snapShot){
    app.updateDate(snapShot.val().date);
    app.updateIter(snapShot.val().iteration);
});