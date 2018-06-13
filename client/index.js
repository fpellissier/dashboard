var myRef = new Webcom('https://io.datasync.orange.com/base/pello/dateTimeService');

let app = new Vue({
    el:'#DATETIME_data',
    data: {
        jour: '20170000',
        heure: '10h30m00s',
        datetime: {'t1': 123}
    },
    methods: {
        updateJour: function(j) {this.jour = j;},
        updateHeure: function(h) {this.heure = h;},
        update: function(dt) {
            this.datetime = dt;
            update_graph(Object.values(dt));
        }
    }
});

myRef.on('child_added', function(snapShot){
    console.log("Mess from webcom : " + JSON.stringify(snapShot.val()));
    let o = snapShot.val();
    let jour, heure;
    for( var p in o ) {
        if(!jour) {
            jour = p;
        }
    };
    for( var p in o[jour] ) {
        if(!heure) {
            heure = p;
        }
    };
    app.updateJour(jour);
    app.updateHeure(heure);
    app.update(o[jour][heure]);
});

var update_graph = function(times){
    var x = d3.scale.linear().domain([0, d3.max(times)]).range([0, 1000]);
    d3.select(".chart").selectAll("div").data(times).enter().append("div").style("width", function(d) { return x(d) + "px"; }).text(function(d) { return d; });

}

//TODO : try http://microbuilder.io/blog/2016/01/10/plotting-json-data-with-chart-js.html
//TODO : try https://plot.ly/javascript/