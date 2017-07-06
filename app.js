//Creates express http server at 127.0.0.1
var express = require('express'),
    app = express(), //Creates express http server at 127.0.0.1
    bodyParser = require('body-parser'), //Parse response body for json data
    logger = require('morgan'), //morgan server activity logger
    http = require('http');

var request = require("request");
var firebase = require("firebase");

var routeCoodinateGenerator = require('./routes/route-coordinate-generator.js');
var mysqlHelper = require('./util/mysql-helper.js');
var globals = require('./global')


process.argv.forEach(function (val, index, array) {
    if (val == "update") {
        // mysqlHelper.UpdatePullmanBusstop();
        // mysqlHelper.UpdatePUllmanRoute();
        mysqlHelper.UpdataPullmanRoute2016Fall()
mysqlHelper.UpdatePullmanBusstop2016Fall()
    }
    else if (val == "generate") {
        routeCoodinateGenerator.startGenerate();
    }
    else if (val == "test"){
        globals.serverStatus = "test"
    }
    else if (val == "weekday"){
        globals.date = val
    }
    else if(val == "weekend"){
        globals.date  = val
    }
else if (val == "football"){
	globals.date = val
}
    else if(val == "long"){
        globals.updateInterval = "long"
    }
    else if(val == 'gd'){
        globals.locaterMethod = "gd"
    }
    else if(val == "rl"){
        globals.logOption = "rl"
    }
});



routes = require('./routes/index'), //route to our routes javascript file

firebase.initializeApp({
    serviceAccount: "serviceAccountCredentials.json",
    databaseURL: "https://coug-transit-a7854.firebaseio.com/"
});


app.use(logger('dev')); //Dev logger


app.use(bodyParser.json()); //Parse response body into JSON
app.use(bodyParser.urlencoded({
    extended: true
})); //Not sure really.

app.use('/routes', express.static(__dirname + '/routes'));

//Send static files from client
app.use(express.static(__dirname + '/public'));

app.use('/', routes); //Handle all requests though our router.

var portnum = 3000
//Start our server listening on port 3000
app.listen(portnum, function (err) {
    //Handle error
    if (err)
        return handleError(err);
    else
        console.log("Init listening ...\nConnected.\nListening at http://127.0.0.1:" + portnum); //Print out dev url.
});


// app is a callback function or an express application

// if (!module.parent) {
// 	http.createServer(app).listen(process.env.PORT, function() {
// 		console.log("Server listening on port " + app.get('port'));
// 	});
// }
